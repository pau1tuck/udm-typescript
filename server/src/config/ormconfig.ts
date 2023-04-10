import { DatabaseType } from "typeorm";

const { DEBUG, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const postgresDatabase: DatabaseType = "postgres";

export default {
    type: postgresDatabase,
    host: DB_HOST || "localhost",
    port: Number(DB_PORT || "5432"),
    username: DB_USER || "admin",
    password: DB_PASS || "badpassword",
    database: DB_NAME || "mydatabase",
    synchronize: Boolean(true),
    logging: Boolean(DEBUG ? "all" : "error"),
    logger: "advanced-console" as const,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
};
