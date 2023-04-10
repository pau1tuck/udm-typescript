import path from "path";
import { DatabaseType } from "typeorm";

const { DEBUG, DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const postgresDatabase: DatabaseType = "postgres";

export default {
    type: postgresDatabase,
    host: DB_HOST || "localhost",
    port: Number(DB_PORT || "5432"),
    username: DB_USER || "admin",
    password: DB_PASS || "badpassword",
    database: DB_NAME || "mydatabase",
    synchronize: Boolean(true),
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
};
