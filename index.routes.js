const express = require("express");
const routes = express.Router();
const getRate = require('./src/rate/route.rate.js');
const subscribeEmail = require('./route.subscription.js');

routes.use(getRate);
routes.use(subscribeEmail);

module.exports = routes;