import express from 'express';
import {
  addStudent,
  getStudents,
  getStudentMarks,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { studentUpdateValidation, studentValidation } from '../validations/studentValidation.js';
import { validate } from '../middleware/validateMiddleware.js'; // ✅ import validate

const router = express.Router();

// ✅ POST → Add new student (protected + validated)
router.post('/', protect, validate(studentValidation), addStudent);

// ✅ GET → All students (public or protected based on your choice)
router.get('/',protect, getStudents);

// ✅ GET → Marks of a specific student (protected)
router.get('/:id/marks', protect, getStudentMarks);

// ✅ PUT → Update student info (protected)
router.put('/:id', protect,validate(studentUpdateValidation),  updateStudent);

// ✅ DELETE → Delete student (admin only)
router.delete('/:id', protect, admin, deleteStudent);

export default router;
