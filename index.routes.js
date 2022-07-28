const express = require("express");
const routes = express.Router();
const rate = require('./src/rate/route.rate.js');
const subscribe = require('./src/emails/subscription/route.subscription.js');
const sendEmails = require('./src/emails/mailing/route.mailing.js')

routes.use(rate);
routes.use(subscribe);
routes.use(sendEmails);

module.exports = routes;