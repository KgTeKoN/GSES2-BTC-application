const  port = require('./config.js');
const express = require('express');
const routes = require('./src/rate/routes.rate.js');

const app = express();
app.use(routes);

app.listen(port, () => console.log('Server start'));
