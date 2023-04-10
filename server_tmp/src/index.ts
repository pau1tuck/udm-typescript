import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import { v4 } from "uuid";
import bodyParser from "body-parser";
import throng from "throng";

import express, { Express, Request, Response } from "express";
import session from "express-session";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { DataSource } from "typeorm";
// import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import ormconfig from "./config/ormconfig.js";

import { RedisStore, redisClient } from "./config/redis.js";

// Check the current environment and assign true or false to PROD constant
const PROD = process.env.NODE_ENV === "production";

// Assign the declared number of concurrent workers to the WORKERS constant
const WORKERS = Number(process.env.WEB_CONCURRENCY) || 1;

// Destructure required values from .env
const { DEBUG, HOST, PORT, CORS_ORIGIN, SESSION_SECRET, SESSION_COOKIE, DB_HOST, DB_PORT, REDIS_HOST, REDIS_PORT } =
    process.env;

export const appDataSource = new DataSource(ormconfig);

const init = async () => {
    // Configure TypeOrm database

    // Initialize TypeOrm database and check for errors
    appDataSource
        .initialize()
        .then(() => {
            console.log(`Connected to PostgreSQL database on ${DB_HOST}:${DB_PORT}`);
        })
        .catch((err) => {
            console.error("Error during TypeOrm DataSource initialization:", err);
        });

    // Initialize Express.js
    const app: Express = express();

    app.disable("x-powered-by");

    app.set("trust proxy", "127.0.0.1");

    app.use(
        cors({
            origin: CORS_ORIGIN,
            credentials: true,
        })
    );

    app.use(
        session({
            name: SESSION_COOKIE,
            genid: () => v4(),
            store: new RedisStore({
                client: redisClient as any,
                disableTouch: true,
                disableTTL: true,
            }),
            cookie: {
                maxAge: 3600000 * 24 * 365,
                httpOnly: true,
                sameSite: "lax",
                secure: "auto",
                domain: PROD ? ".udmx.net" : undefined,
            },
            secret: SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
        })
    );

    const graphQLSchema = await buildSchema({
        resolvers: [],
        validate: false,
    });

    app.listen(PORT, () => {
        console.log(`🚀 Node server running on ${HOST}:${PORT}`);
    });
};

throng(WORKERS, init);
