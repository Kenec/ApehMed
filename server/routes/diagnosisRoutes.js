import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
import { validateSymptoms } from '../shared/middlewares/validation';

const diagnosisController = controller.diagnosis;
const diagnosisRoutes = express.Router();

diagnosisRoutes.post('/', jwtAuth, validateSymptoms, diagnosisController.diagnosePatient);

export default diagnosisRoutes;