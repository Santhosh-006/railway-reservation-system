import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["passenger", "admin"],
      default: "passenger",
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", schema);

export default User;
