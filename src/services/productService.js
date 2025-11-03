import { pool } from "../config/db.js";
import { ResponseError } from "../erors/responseError.js";
import {
  productSchema,
  updateProductSchema,
} from "../validations/productValidation.js";
import { validate } from "../validations/validate.js";

export const getAllProducts = async () => {
  const [products] = await pool.query(
    "SELECT id, user_id, name, description, price, stock, created_at, updated_at FROM products"
  );
  return products;
};

export const getProductById = async (id) => {
  const [products] = await pool.query(
    "SELECT id, user_id, name, description, price, stock, created_at, updated_at FROM products WHERE id=?",
    [id]
  );

  if (products.length === 0) {
    throw new ResponseError(404, "Product not Found");
  }

  return products[0];
};

export const createProduct = async (request) => {
  const validation = validate(productSchema, request);
  const { user_id, name, description, price, stock } = validation;

  const [products] = await pool.query(
    "INSERT INTO products (user_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)",
    [user_id, name, description, price, stock]
  );

  const newProduct = {
    id: products.insertId,
    user_id,
    name,
    description,
    price,
    stock,
  };
  return newProduct;
};

export const updateProduct = async (id, data) => {
  const productId = Number(id);

  const validation = validate(updateProductSchema, data);
  const { user_id, name, description, price, stock } = validation;

  const [result] = await pool.query(
    "UPDATE products SET user_id = ?, name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
    [user_id, name, description, price, stock, productId]
  );

  if (result.affectedRows === 0) {
    throw new ResponseError(400, "Tidak ada perubahan pada data produk");
  }

  const [updatedProduct] = await pool.query(
    "SELECT id, user_id, name, description, price, stock, created_at, updated_at FROM products WHERE id = ?",
    [productId]
  );

  return updatedProduct[0];
};

export const deleteProduct = async (id) => {
  const productId = Number(id);
  const [result] = await pool.query("DELETE FROM products WHERE id=?", [
    productId,
  ]);
  if (result.affectedRows === 0) {
    throw new ResponseError(404, "Product not Found");
  }
  return { message: "Product deleted successfully" };
};
