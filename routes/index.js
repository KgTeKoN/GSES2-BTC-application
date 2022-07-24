const express = require("express");
const getRate = require('./get.js')
const routes = express.Router();

routes.use(getRate);

module.exports = routes;