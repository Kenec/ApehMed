import express from 'express';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import symptomsRoutes from './symptomsRoutes';
import treatmentRoutes from './treatmentRoutes';
import sicknessRoutes from './sicknessRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to Apehmed STD Expert System");
});

router.use('/api/v1/users/', userRoutes);
router.use('/api/v1/admins/', adminRoutes); 
router.use('/api/v1/symptoms/', symptomsRoutes);
router.use('/api/v1/sickness/', sicknessRoutes); 
router.use('/api/v1/treatments/', treatmentRoutes);

export default router;