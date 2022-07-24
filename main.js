const  port = require('./config.js');
const express = require('express');
const routes = require('./routes/get.js');

const app = express();
app.use(routes);

app.listen(port, () => console.log('Server start'));
