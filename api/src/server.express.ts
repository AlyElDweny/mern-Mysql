import * as express from "express";
import * as cors from "cors";
import projectsRouter from "./routes/projects/projects.api";
import router from "./test";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/test", router);
app.use("/apis/projects", projectsRouter);

app.get("/", (_, res) => {
  res.send("HI THERE !!!!");
});

export default app;
