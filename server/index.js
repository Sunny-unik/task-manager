const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const { rateLimit } = require("express-rate-limit");
const connectDb = require("./db");

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, limit: 100 }));
connectDb();

app.get("/", (_, res) => res.send("Hello World!"));
app.get("/health", (_, res) => res.send("ok"));

app.listen(port, () =>
  console.log(`server live on http://localhost:${port}, pid:${process.pid}`)
);
