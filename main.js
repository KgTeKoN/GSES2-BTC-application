import { PORT } from './config.js';
import express from 'express';
import

const APP = express();
APP.use(routes);

APP.listen(PORT, () => console.log('Server start'));
