import express from "express"
import { saveTodo } from "../controllers/todoController.js";
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/save",protect,saveTodo)

export default router;