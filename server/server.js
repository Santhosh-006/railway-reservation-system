import express from "express";
import connectDB from "./lib/db.js";
import router from "./routes/auth.routes.js";
import trainRouter from "./routes/train.route.js";
import bookingRouter from "./routes/bookings.route.js";

const app = express();

app.use(express.json());

app.use("/", router);
app.use("/train", trainRouter);
app.use("/booking", bookingRouter);

console.log("hello");

const startServer = async () => {
  try {
    await connectDB();
    app.listen(6969, () => {
      console.log("Server is running at port 6969");
    });
  } catch (error) {
    console.log("Failed to connect to the database");
  }
};

startServer();
