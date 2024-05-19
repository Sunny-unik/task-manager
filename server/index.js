const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());

app.get("/", (_, res) => res.send("Hello World!"));
app.get("/health", (_, res) => res.send("ok"));

app.listen(port, () =>
  console.log(`server live on http://localhost:${port} pid:${process.pid}`)
);
