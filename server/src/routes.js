import { Router } from "express";

import fragranceController from "./controllers/fragranceController.js";
import userController from "./controllers/userController.js";
const routes = Router();

routes.use('/api/users', userController);
routes.use('/api/fragrances', fragranceController)

export default routes; 