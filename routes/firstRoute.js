import express from "express";
import controller from '../controllers/index'
const firstRoute = express.Router();

firstRoute.get('/',controller.firstControllers.firstController)