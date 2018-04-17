import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
// import { isAdminToken, validateSymptoms } from '../shared/middlewares/validation';

const sicknessController = controller.sickness;
const sicknessRoutes = express.Router();

sicknessRoutes.get('/', jwtAuth, sicknessController.getAllSickness);
// sicknessRoutes.post('/', jwtAuth, isAdminToken, validateSymptoms, symptomsController.postSymptoms);
// sicknessRoutes.put('/:id', jwtAuth, isAdminToken, validateSymptoms, symptomsController.updateSymptoms);
// sicknessRoutes.delete('/:id', jwtAuth, isAdminToken, validateSymptoms, symptomsController.deleteSymptoms);


export default sicknessRoutes;