import { Router } from "express";

import authController from "./controllers/userController.js";
import fragranceController from "./controllers/fragranceController.js";
const routes = Router();

routes.use('/users', authController);
routes.use('/fragrances', fragranceController)

export default routes; 