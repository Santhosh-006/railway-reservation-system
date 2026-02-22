import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" },
  );
};

// User Register

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "passenger",
    });

    res.status(201).json({ message: "User registered successfully" });
    generateToken(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login User

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    res.json({
      message: "Login Successfull",
      token: generateToken(user),
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Logout User

export const logoutUser = async (req, res) => {
  res.json({ message: "Logout Successfull" });
};
