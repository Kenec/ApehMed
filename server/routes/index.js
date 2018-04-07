import express from 'express';
import userRoutes from './userRoutes';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to Apehmed STD Expert System");
});

router.use('/api/v1/users/', userRoutes);

export default router;