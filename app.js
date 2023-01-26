require("dotenv").config();
const express = require("express");
const chalk = require("chalk");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `${chalk.bold.blue(`[devdox]`)} ${chalk.gray(`API listening on port ${chalk.yellow(port)}.`)}`
  );
});
