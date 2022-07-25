const express = require("express");
const getRate = require('./route.rate.js')
const routes = express.Router();

routes.use(getRate);

module.exports = routes;