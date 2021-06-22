require("./db/mongo");
const express = require("express");
const morgan = require("morgan");
const routes = require("./user/user.route");


module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(routes);
};
