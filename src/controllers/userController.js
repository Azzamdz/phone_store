import * as UserService from "../services/userService.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const respon = await UserService.getAllUsers();
    res.status(200).json({
      status: "success",
      data: respon,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respon = await UserService.getUserById(id);
    res.status(200).json({
      status: "success",
      data: respon,
    });
  } catch (error) {
    console.error(error);
  }
};
