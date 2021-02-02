import express from "express"
import { login, signup } from "../userController";

export const userRouter = express.Router();

userRouter.post("/signuo", signup)
userRouter.post("/login", login)