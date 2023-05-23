import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Project } from "./entity/Project";

dotenv.config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST }: any =
  process.env;

export const dbConn = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Project],
  migrations: [],
  subscribers: [],
});
