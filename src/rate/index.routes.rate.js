const express = require("express");
const getRate = require('./routes.rate.js')
const routes = express.Router();

routes.use(getRate);

module.exports = routes;