require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/conn");

const cors = require("cors");
const corsOptions = require("./configs/cors.js");

const express = require("express");
const app = express();

const morgan = require("morgan");
const bookRouter = require("./controllers/book");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });
  