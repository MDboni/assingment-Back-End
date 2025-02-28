import express from "express";
const router = express.Router();

import * as PortfolioController from "../app/controller/PortfolioController.js";
import * as UsersController from "../app/controller/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";



router.post("/Registration",UsersController.Registration)
router.post("/Login",UsersController.Login)
router.get("/ProfileDetails",AuthMiddleware,UsersController.ProfileDetails)
router.put("/ProfileUpdate",AuthMiddleware,UsersController.ProfileUpdate)


router.post("/CreateTask",AuthMiddleware,PortfolioController.CreateTask)
router.get("/ReadTask",AuthMiddleware,PortfolioController.ReadTask)
router.patch("/UpdateTaskStatus/:id/:status",AuthMiddleware,PortfolioController.UpdateTaskStatus)
router.delete("/DeleteTask/:id",AuthMiddleware,PortfolioController.DeleteTask)



export default router;