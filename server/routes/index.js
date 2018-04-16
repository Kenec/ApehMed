import express from 'express';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import symptomsRoutes from './symptomsRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to Apehmed STD Expert System");
});

router.use('/api/v1/users/', userRoutes);
router.use('/api/v1/admins/', adminRoutes); 
router.use('/api/v1/symptoms/', symptomsRoutes);

export default router;