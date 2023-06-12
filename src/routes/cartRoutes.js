import express from 'express';
import {
  createCart,
  getCartById,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantityInCart,
  emptyCart,
  purchaseCart,
} from '../controllers/cartController.js';

const router = express.Router();

router.post("/", createCart);

router.get("/:cartId", getCartById);

router.post("/products/:cartId/product/:productId", addProductToCart);

router.delete("/products/:cartId/product/:productId", removeProductFromCart);

router.put("/products/:cartId/product/:productId", updateProductQuantityInCart);

router.delete("/:cartId", emptyCart);

router.post("/:cartId/purchase", purchaseCart); // Nueva ruta para finalizar la compra

export default router;
