const express = require("express");
const { controllerGetRate: routeRate } = require("./controller.rate.js");

const routes = express.Router();

routes.get('/rate', routeRate);

module.exports = routes;