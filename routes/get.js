const express = require("express");
const { controllerGetRate: getRate } = require("../controllers/get.js");

const routes = express.Router();

routes.get('/rate', getRate);

module.exports = routes;