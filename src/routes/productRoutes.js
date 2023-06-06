import express from 'express';
import ProductController from '../controllers/productController.js';

const productController = new ProductController();
const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:pid", productController.getProductById);

router.post("/", productController.addProduct);

router.put("/:pid", productController.updateProduct);

router.delete("/:pid", productController.deleteProduct);

export default router;
