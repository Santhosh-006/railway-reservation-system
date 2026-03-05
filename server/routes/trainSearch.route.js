import express from "express";

import { protect } from "../middlewares/authorize.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import {
  getAllTrains,
  searchTrain,
} from "../controllers/trainSearch.controller.js";

const trainSearchRouter = express.Router();

trainSearchRouter.get("/", getAllTrains);

trainSearchRouter.get("/search", searchTrain);

export default trainSearchRouter;
