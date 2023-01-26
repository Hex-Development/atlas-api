require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const app = express();

require('./auth/login')(app);
require('./auth/register')(app);

const port = process.env.PORT;

app.get("/", (req, res) => {
    // TODO
});

app.listen(port, () => {
  console.log(
    `${chalk.bold.blue(`[devdox]`)} ${chalk.gray(`API listening on port ${chalk.yellow(port)}.`)}`
  );
});
