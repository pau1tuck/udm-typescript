import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import { v4 } from "uuid";
import throng from "throng";
import express from "express";
import session from "express-session";
import { DataSource } from "typeorm";
import ormconfig from "./config/ormconfig.js";
import { RedisStore, redisClient } from "./config/redis.js";
const PROD = process.env.NODE_ENV === "production";
const WORKERS = Number(process.env.WEB_CONCURRENCY) || 1;
const { DEBUG, HOST, PORT, CORS_ORIGIN, SESSION_SECRET, SESSION_COOKIE, DB_HOST, DB_PORT, REDIS_HOST, REDIS_PORT } = process.env;
const init = async () => {
    const ormConfig = new DataSource(ormconfig);
    ormConfig
        .initialize()
        .then(() => {
        console.log(`Connected to PostgreSQL database on ${DB_HOST}:${DB_PORT}`);
    })
        .catch((err) => {
        console.error("Error during TypeOrm DataSource initialization:", err);
    });
    const app = express();
    app.disable("x-powered-by");
    app.set("trust proxy", "127.0.0.1");
    app.use(cors({
        origin: CORS_ORIGIN,
        credentials: true,
    }));
    app.use(session({
        name: SESSION_COOKIE,
        genid: () => v4(),
        store: new RedisStore({
            client: redisClient,
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
    }));
    app.listen(PORT, () => {
        console.log(`🚀 Node server running on ${HOST}:${PORT}`);
    });
};
throng(WORKERS, init);
