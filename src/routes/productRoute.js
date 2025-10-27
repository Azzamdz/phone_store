import express from "express";
import {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProductsHandler);
productRouter.get("/products/:id", getProductByIdHandler);
productRouter.post("/products", createProductHandler);
productRouter.put("/products/:id", updateProductHandler);
productRouter.delete("/products/:id", deleteProductHandler);

export default productRouter;
