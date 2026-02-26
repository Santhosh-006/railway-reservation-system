import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    trainId: {
      type: Schema.Types.ObjectId,
      ref: "Train",
      required: true,
    },
    seatsBooked: {
      type: Number,
      required: true,
    },
    PNR: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      enum: ["CONFIRMED", "CANCELED"],
      default: "CONFIRMED",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = model("Booking", schema);

export default Booking;
