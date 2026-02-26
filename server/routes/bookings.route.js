import express from "express";
import { bookTrain } from "../controllers/booking.controller.js";
import { protect } from "../middlewares/authorize.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const bookingRouter = express.Router();

bookingRouter.use(protect);

bookingRouter.use(authorize("passenger"));

// bookingRouter.get("/my-bookings");

bookingRouter.post("/book", bookTrain);

export default bookingRouter;
