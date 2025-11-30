import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import authRoutes from '../routes/auth.js';
import applicationRoutes from '../routes/applications.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Bushi API is running!',
    timestamp: new Date().toISOString()
  });
});

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Bushi API!' });
});

// Export for Vercel serverless
export default app;
