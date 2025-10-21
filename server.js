import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Debug
app.use((req, res, next) => {
  console.log('Body received >>>>>>>>:', req.body);
  next();
});

// Routes

app.use('/api', authRoutes);

app.use('/api/products', productRoutes);

app.use('/api/students', studentRoutes);

// Error handlerC
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
