import { Router } from "express";
import controllers from "../controllers/index.js";

const jodhpurRoutes = Router();

jodhpurRoutes.get(
  "/get-speciality/:speciality",
  controllers.jodhpurControllers.jodhpurController
);

jodhpurRoutes.post(
  "/update-details",
  controllers.userControllers.userController
);

export default jodhpurRoutes;
