const express = require("express");
const { controllerGetRate: routesRate } = require("./controller.rate.js");

const routes = express.Router();

routes.get('/rate', routesRate);

module.exports = routes;