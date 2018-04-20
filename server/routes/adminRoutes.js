import express from 'express';
import controller from '../controllers';
import { adminSignupValidation, signinValidation, isAdmin,
  isAdminExits, isValidToken } from '../shared/middlewares/validation';

const adminController = controller.admins;
const adminRoutes = express.Router();

adminRoutes.post('/signup', isValidToken, adminSignupValidation,isAdminExits, adminController.adminSignup);
adminRoutes.post('/signin', isValidToken, signinValidation, isAdmin, adminController.adminSignin);

export default adminRoutes;