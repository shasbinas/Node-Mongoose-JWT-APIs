import express from 'express';
import { addProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addProduct);

router.get('/', getProducts);

router.put('/:id', protect, updateProduct);

router.delete('/:id', protect, admin, deleteProduct);

export default router;
