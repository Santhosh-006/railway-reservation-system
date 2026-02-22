import { model, Schema } from "mongoose";

const schema = new Schema({
  trainName: {
    type: String,
    required: true,
  },
  trainNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  stations: [
    {
      name: String,
      arrivalTime: String,
      depatureTime: String,
      order: Number,
    },
  ],
  totalSeats: {
    type: Number,
    required: true,
  },
  seatsBooked: {
    type: Number,
    default: 0,
  },
  journeyDate: {
    type: Date,
    required: true,
  },
});
