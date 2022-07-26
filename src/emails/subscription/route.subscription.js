const express = require("express");
const { controllerPostEmail: routeSubscribes } = require
const { validateExistEmail } = require('./validator.subscriber')

const route = express.Router();

route.post('/subscribe', validateExistEmail ,routeSubscribes);

module.exports = route;