import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// POST /api/register
export const registerUser = async (req, res) => {
  const { username, email, password, role, age } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Include optional fields role and age
  const user = await User.create({
    username,
    email,
    password,
    role: role || 'user',
    age: age || null
  });

  const token = createToken(user._id);

  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    age: user.age,
    token
  });
};

// POST /api/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = createToken(user._id);
  res.status(200).json({ _id: user._id, username: user.username, email, token, role: user.role });
};


export const getUsers = async (req, res, next) => {
  try {
    const query = {};

    // Age filter (convert to Number)
    if (req.query.age) {
      query.age = Number(req.query.age);
    }

    // Role filter (case-insensitive & trim spaces)
    if (req.query.role) {
      query.role = { $regex: new RegExp(`^${req.query.role.trim()}$`, 'i') }; 
    }

    console.log("Final Query:", query); // Debugging

    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (err) {
    next(err);
  }
};



// Get single user by _id: /api/users/:id (public)
export const getUserByIdPublic = async (req, res, next) => {
  try {
    const userId = req.params.id.trim();

    // 1️⃣ Validate ID format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    // 2️⃣ Find user, exclude password
    const user = await User.findById(userId).select('-password');

    // 3️⃣ Handle not found
    if (!user) {
      return res.status(404).json({ message: `User with ID ${userId} not found` });
    }

    // 4️⃣ Return user
    res.status(200).json(user);
  } catch (err) {
    next(err); // Pass errors to your global error handler
  }
};

