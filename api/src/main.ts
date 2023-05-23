import * as dotenv from "dotenv";

import app from "./server.express";
import { AppDataSource as conn } from "./data-source";

dotenv.config();
//
const PORT = process.env.SERVER_PORT;
const WORKBENCH_PORT = process.env.WORKBENCH_PORT;

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);

  try {
    await conn.initialize();
    console.log(
      `database is connected successfully. Please check Mysql Workbench at http://localhost:${WORKBENCH_PORT}`
    );
  } catch (err) {
    console.log({ err });
  }
});
