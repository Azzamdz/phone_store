import { request } from "express";
import { pool } from "../config/db.js";
import { ResponseError } from "../erors/responseError.js";

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

export const createUser = async (request) => {
  const { fullname, username, email, password, role } = request;

  const [users] = await pool.query(
    "INSERT INTO users (fullname, username, email, password, role) VALUES (?, ?, ?, ?, ?)",
    [fullname, username, email, password, role]
  );

  const newUser = {
    id: users.insertId,
    fullname,
    username,
    email,
    role,
  };
  return newUser;
};

export const updateUser = async (id, data) => {
  const { fullname, username, email, password, role } = data;

  await pool.query(
    "UPDATE users SET fullname=?, username=?, email=?, password=?, role=? WHERE id=?",
    [fullname, username, email, password, role, id]
  );

  return { id, fullname, username, email, role };
};
