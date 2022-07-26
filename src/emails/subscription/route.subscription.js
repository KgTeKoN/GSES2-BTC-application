const express = require("express");
const { controllerSubscriber: routeSubscribes } = require('./controller.subscription.js');

const route = express.Router();

route.post('/subscribe', routeSubscribes);

module.exports = route;