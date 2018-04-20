import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
import { isAdminToken, validateTreatment, isIDNumber } from '../shared/middlewares/validation';

const treatmentController = controller.treatments;
const treatmentRoutes = express.Router();

treatmentRoutes.get('/', jwtAuth, treatmentController.getTreatment);
treatmentRoutes.get('/:id', jwtAuth, isIDNumber, treatmentController.getOneTreatment);
treatmentRoutes.post('/', jwtAuth, isAdminToken, validateTreatment, treatmentController.postTreatment);
treatmentRoutes.put('/:id', jwtAuth, isAdminToken, validateTreatment, treatmentController.updateTreatment);
treatmentRoutes.delete('/:id', jwtAuth, isAdminToken, validateTreatment, treatmentController.deleteTreatment);


export default treatmentRoutes;