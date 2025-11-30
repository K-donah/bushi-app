import express from 'express';
import { db } from '../config/firebase.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Get all applications for a user
router.get('/', async (req, res) => {
  try {
    const userId = req.userId;
    const applicationsRef = db.collection('applications');
    const snapshot = await applicationsRef.where('userId', '==', userId).get();
    
    const applications = [];
    snapshot.forEach(doc => {
      applications.push({ id: doc.id, ...doc.data() });
    });
    
    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new application
router.post('/', async (req, res) => {
  try {
    const userId = req.userId;
    const applicationData = req.body;
    
    const applicationsRef = db.collection('applications');
    const docRef = await applicationsRef.add({
      ...applicationData,
      userId,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });
    
    res.status(201).json({ 
      id: docRef.id,
      message: 'Application created successfully' 
    });
  } catch (error) {
    console.error('Create application error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
