import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
// import { isAdminToken, validateSymptoms } from '../shared/middlewares/validation';

const treatmentController = controller.treatments;
const treatmentRoutes = express.Router();

treatmentRoutes.get('/', jwtAuth, treatmentController.getTreatment);
// sicknessRoutes.post('/', jwtAuth, isAdminToken, validateSymptoms, symptomsController.postSymptoms);
// sicknessRoutes.put('/:id', jwtAuth, isAdminToken, validateSymptoms, symptomsController.updateSymptoms);
// sicknessRoutes.delete('/:id', jwtAuth, isAdminToken, validateSymptoms, symptomsController.deleteSymptoms);


export default treatmentRoutes;