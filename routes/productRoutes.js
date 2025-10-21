import express from 'express';
import { addProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { productUpdateValidation, productValidation } from '../validations/productValidations.js';
import { validate } from '../middleware/validateMiddleware.js'; // ✅ Add this line

const router = express.Router();

// ✅ Apply validation middleware before controller
router.post('/', protect, validate(productValidation), addProduct);

router.get('/',protect, getProducts);

router.put('/:id', protect, validate(productUpdateValidation), updateProduct);

router.delete('/:id', protect, admin, deleteProduct);

export default router;
