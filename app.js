const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Server Status: Online" });
});

module.exports = app;
