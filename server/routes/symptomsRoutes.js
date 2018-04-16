import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
import { isAdminToken, validateSymptoms } from '../shared/middlewares/validation';

const symptomsController = controller.symptoms;
const symptomsRoutes = express.Router();

symptomsRoutes.get('/', jwtAuth, symptomsController.getAllSymptoms);
symptomsRoutes.post('/', jwtAuth, isAdminToken, validateSymptoms, symptomsController.postSymptoms);

export default symptomsRoutes;