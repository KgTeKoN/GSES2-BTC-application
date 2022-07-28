const express = require('express');
const {controllerSubscriber: routeSubscribes} = require('./controller.subscription.js');
const {bodyValidator} = require('./validators/validator.body.js');

const route = express.Router();

route.post('/subscribe', bodyValidator, routeSubscribes);

module.exports = route;
