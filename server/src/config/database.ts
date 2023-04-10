import path from "path";
import { createConnection } from "typeorm";
import { User } from "../entity/user.entity";
import { Track } from "../entity/track.entity";

export default {
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: process.env.DEBUG || true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    entities: [User, Track],
    migrations: [path.join(__dirname, "/migrations/**/*.ts")],
    subscribers: [path.join(__dirname, "/subscribers/**/*.ts")],
    cli: {
        migrationsDir: path.join(__dirname, "/migrations"),
    },
} as Parameters<typeof createConnection>[0];
