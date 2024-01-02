import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const saveTodo = asyncHandler(async(req,res) => {
    const { todo } = req.body;
    const userId = req.user._id
    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.todos.push({ todo });
  
      const updatedUser = await user.save();
  
      res.status(201).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
})