const express = require("express");
const { controllerPostEmail: routeSubscribes } = require

const route = express.Router();

route.post('/subscribe', routeSubscribes);

module.exports = route;