import express from 'express';
import {
  addStudent,
  getStudents,
  getStudentMarks,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/students → Add new student (protected)
router.post('/', protect, addStudent);

// GET /api/students → Get all students
router.get('/', getStudents);

// GET /api/students/:id/marks → Get marks of specific student
router.get('/:id/marks', protect, getStudentMarks);

// PUT /api/students/:id → Update student info
router.put('/:id', protect, updateStudent);

// DELETE /api/students/:id → Delete student (admin only)
router.delete('/:id', protect, admin, deleteStudent);

export default router;
