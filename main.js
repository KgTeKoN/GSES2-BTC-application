import { PORT } from './config.js';
import express from 'express';

const APP = express();

APP.listen(PORT, () => console.log('Server start'));
