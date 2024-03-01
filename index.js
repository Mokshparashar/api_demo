import { data } from "./data.js";
import express from "express";
import cors from "cors";
const port = 3000;
const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log("port starts");
});
