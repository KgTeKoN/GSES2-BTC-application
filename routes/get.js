import express from "express";

const routes = express.Router();

import { controllerGetRate: getRate } from "../controllers/get.js";

routes.get('/rate', getRate);

export { routes };