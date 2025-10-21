import express from 'express';
import { registerUser, loginUser, getUsers, getUserByIdPublic } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { loginValidation, registerValidation } from '../validations/authValidation.js';




const router = express.Router();

// ✅ POST /api/register
router.post('/register',validate(registerValidation), registerUser);

// ✅ POST /api/login
router.post('/login',validate(loginValidation), loginUser);

// ✅ GET /api/users/:id
router.get('/users/:id', protect, getUserByIdPublic);

// ✅ GET /api/users
router.get('/users', protect, getUsers);




export default router;
