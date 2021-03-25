require("dotenv").config;

const express = require("express");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const router = require("./routes/index");

const app = express();

app.set("PORT", process.env.PORT || 5000);

const middlewares = [
  express.json(),
  cookieParser(),
  compression(),
  express.urlencoded({ extended: false }),
];

app.use(middlewares);
app.use("/api/v1", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.all("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}

module.exports = app;
