import express from "express";
import {
  getAllUsersHandler,
  getUserByIdHandler,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsersHandler);
userRouter.get("/users/:id", getUserByIdHandler);
// userRouter.post("/", addUserHandler);
// userRouter.put("/:id", updateUserHandler);
// userRouter.delete("/:id", deleteUserHandler);

export default userRouter;
