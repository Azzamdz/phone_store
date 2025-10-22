import { pool } from "../config/db.js";

export const getAllUsers = async () => {
  const [users] = await pool.query(
    "SELECT id, fullname, username, email, role, address, phone_number, age, created_at, updated_at FROM users"
  );

  return users;
};

export const getUserById = async (id) => {
  const [users] = await pool.query(
    "SELECT fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
    [id]
  );

  if (users.length === 0) {
    throw new ResponseError(404, "User not Found");
  }

  return users[0];
};
