import express from "express";
import { protect } from "../middlewares/authorize.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const trainRouter = express.Router();

trainRouter.use(protect);
trainRouter.use(authorize("admin"));

trainRouter.get("/", (req, res) => {
  res.json({ message: "Endpoint crct" });
});

export default trainRouter;
