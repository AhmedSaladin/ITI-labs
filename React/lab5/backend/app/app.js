require("./db/mongo");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./user/user.route");

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use("/images", express.static("images"));
  app.use(express.json());
  app.use(cors());
  app.use(routes);
};
