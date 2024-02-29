import { data } from "./data.js";
import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log("port starts");
});
