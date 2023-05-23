const express = require("express");
import morgan from "morgan";

const app = express();

app.use(express.json());
// app.use(morgan("dev"));

// Routes
app.use("/", (_, res) => {
  res.send("HI THERE !!!!");
});

export default app;
