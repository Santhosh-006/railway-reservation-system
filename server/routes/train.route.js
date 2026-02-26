import express from "express";
import { protect } from "../middlewares/authorize.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import {
  createTrainDetails,
  deleteTrain,
  getTrains,
  updateTrain,
} from "../controllers/train.controller.js";

const trainRouter = express.Router();

trainRouter.use(protect);
trainRouter.use(authorize("admin"));

trainRouter.post("/", createTrainDetails);

trainRouter.put("/:id", updateTrain);

trainRouter.get("/", getTrains);

trainRouter.delete("/:id", deleteTrain);

export default trainRouter;
