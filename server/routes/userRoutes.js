import express from 'express';
import controller from '../controllers';
import { signupValidation, signinValidation, isAccountExits }
  from '../shared/middlewares/validation';

const userController = controller.users;
const userRoutes = express.Router();

userRoutes.post('/signup', signupValidation, isAccountExits, userController.signup);
userRoutes.post('/signin', signinValidation, userController.signin);

export default userRoutes;