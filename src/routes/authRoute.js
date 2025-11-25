import express from "express";
import {
  LoginHandler,
  registerHandler,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/auth/register", registerHandler);
authRouter.post("/auth/login", LoginHandler);
export default authRouter;
