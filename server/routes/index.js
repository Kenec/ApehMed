import express from 'express';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import symptomsRoutes from './symptomsRoutes';
import treatmentRoutes from './treatmentRoutes';
import sicknessRoutes from './sicknessRoutes';
import diagnosisRoutes from './diagnosisRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to Apehmed STD Expert System");
});

router.use('/v1/users/', userRoutes);
router.use('/v1/admins/', adminRoutes); 
router.use('/v1/symptoms/', symptomsRoutes);
router.use('/v1/sickness/', sicknessRoutes); 
router.use('/v1/treatments/', treatmentRoutes);
router.use('/v1/diagnosis/', diagnosisRoutes);

export default router;