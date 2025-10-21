import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  try {
    // 1️⃣ Check for Bearer token
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1].trim();
    } 
    // 2️⃣ Or allow token in query param (optional)
    else if (req.query.token) {
      token = req.query.token.trim();
    }

    // 3️⃣ No token found
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token provided" });
    }

    // 4️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Fetch user without password
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found, invalid token" });
    }

    // 6️⃣ Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Auth Error:", err.message);
    return res.status(401).json({ message: "Not authorized, token invalid or expired" });
  }
};


// Admin middleware (optional)


export const admin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};


