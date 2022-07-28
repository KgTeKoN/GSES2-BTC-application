const express = require('express');
const { controllerMailing } = require('');

const route = express.Router();

route.post('/sendEmails', controllerMailing);

modile.exports = route;