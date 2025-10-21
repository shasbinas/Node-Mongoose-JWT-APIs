import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  // 1. Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1].trim();
  }
  // 2. Query parameter
  else if (req.query.token) {
    token = req.query.token.trim();
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};


// Admin middleware (optional)


export const admin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};