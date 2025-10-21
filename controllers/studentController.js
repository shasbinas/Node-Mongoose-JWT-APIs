import Student from '../models/Student.js';

export const addStudent = async (req, res, next) => {
  try {
    const { name, marks, class: studentClass } = req.body;
    const student = await Student.create({ name, marks, class: studentClass });
    res.status(201).json(student);
  } catch(err) { next(err); }
};

export const getStudents = async (req, res, next) => {
  try {
    const query = {};
    if(req.query.class) query.class = req.query.class;
    const students = await Student.find(query);
    res.json(students);
  } catch(err) { next(err); }
};

export const getStudentMarks = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if(!student) { res.status(404); return next(new Error('Student not found')); }
    res.json({ marks: student.marks });
  } catch(err) { next(err); }
};

export const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if(!student) { res.status(404); return next(new Error('Student not found')); }
    const { name, marks, class: studentClass } = req.body;
    if(name) student.name = name;
    if(marks !== undefined) student.marks = marks;
    if(studentClass) student.class = studentClass;
    await student.save();
    res.json(student);
  } catch(err) { next(err); }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if(!student) { res.status(404); return next(new Error('Student not found')); }
    await student.remove();
    res.json({ message: 'Student deleted' });
  } catch(err) { next(err); }
};
