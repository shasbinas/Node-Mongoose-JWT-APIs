import express from 'express';
import { registerUser, loginUser, getUsers, getUserByIdPublic } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';




const router = express.Router();

// ✅ POST /api/register
router.post('/register', registerUser);

// ✅ POST /api/login
router.post('/login', loginUser);

// ✅ GET /api/users/:id
router.get('/users/:id',  getUserByIdPublic);

// ✅ GET /api/users
router.get('/users', getUsers);




export default router;
