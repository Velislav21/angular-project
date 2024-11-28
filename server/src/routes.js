import { Router } from "express";

import authController from "./controllers/userController.js";
import fragranceController from "./controllers/fragranceController.js";
const routes = Router();

routes.use('/api/users', authController);
routes.use('/api/fragrances', fragranceController)

export default routes; 