const express = require('express');
const {controllerMailing} = require('./controller.mailing.js');

const route = express.Router();

route.post('/sendEmails', controllerMailing);

module.exports = route;
