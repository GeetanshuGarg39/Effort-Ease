import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: passwordHash,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error while registering user");
  }
});
