import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import { v4 } from "uuid";
import throng from "throng";

import express, { Express, Request, Response } from "express";
import session from "express-session";

import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import ormconfig from "./config/ormconfig";

const PROD = process.env.NODE_ENV === "production";
const WORKERS = Number(process.env.WEB_CONCURRENCY) || 1;

const { DEBUG, HOST, PORT, CORS_ORIGIN, SESSION_COOKIE, DB_HOST, DB_PORT, REDIS_HOST, REDIS_PORT } = process.env;

const server = async () => {
    const ormConfig = new DataSource(ormconfig);

    const app: Express = express();

    app.disable("x-powered-by");

    app.set("trust proxy", "127.0.0.1");

    app.use(
        session({
            name: SESSION_COOKIE,
            genid: () => v4(),
            cookie: {
                maxAge: 3600000 * 24 * 365,
                httpOnly: true,
                sameSite: "lax",
                secure: "auto",
                domain: PROD ? ".udmx.net" : undefined,
            },
            secret: process.env.SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
        })
    );
    /*
    if (orm.isInitialized) {
        console.log(`🗄️  Connected to PostgreSQL database on ${DB_HOST}:${DB_PORT}`);
    }
*/
    app.listen(PORT, () => {
        console.log(`🚀 Node server running on ${HOST}:${PORT}`);
    });
};

throng(WORKERS, server);
