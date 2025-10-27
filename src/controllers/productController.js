import * as ProductService from "../services/productService.js";

export const getAllProductsHandler = async (req, res, next) => {
  try {
    const response = await ProductService.getAllProducts();
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await ProductService.getProductById(id);
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const createProductHandler = async (req, res, next) => {
  try {
    const response = await ProductService.createProduct(req.body);
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductHandler = async (req, res, next) => {
  try {
    const response = await ProductService.updateProduct(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await ProductService.deleteProduct(id);

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
