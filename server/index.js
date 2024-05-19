const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const { rateLimit } = require("express-rate-limit");
const connectDb = require("./db");
const taskRoutes = require("./routes/tasks");
const userRoutes = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
let validOrigins;
try {
  validOrigins = JSON.parse(process.env.ORIGINS);
} catch (error) {
  console.log(error.stack);
}

app.use(helmet());
app.use(cors({ credentials: true, origin: validOrigins }));
app.use(express.json());
app.use(rateLimit({ windowMs: 10 * 60 * 1000, limit: 100 }));
app.use(cookieParser());
connectDb();

app.get("/", (_, res) => res.send("Hello World!"));
app.get("/health", (_, res) => res.send("ok"));

app.use("/task", taskRoutes);
app.use("/user", userRoutes);

app.use(errorHandler);

app.listen(port, () =>
  console.log(`server live on http://localhost:${port}, pid:${process.pid}`)
);
