import * as UserService from "../services/authService.js";

export const registerHandler = async (req, res, next) => {
  try {
    const response = await AuthService.register();
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
