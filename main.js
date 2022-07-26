const port = require('./config.js');
const express = require('express');
const routes = require('./src/rate/route.rate.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => console.log('Server start'));
