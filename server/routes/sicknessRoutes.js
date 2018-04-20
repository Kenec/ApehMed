import express from 'express';
import controller from '../controllers';
import jwtAuth from '../shared/middlewares/jwtAuth';
import { isAdminToken, validateSickness, isIDNumber } from '../shared/middlewares/validation';

const sicknessController = controller.sickness;
const sicknessRoutes = express.Router();

sicknessRoutes.get('/', jwtAuth, sicknessController.getAllSickness);
sicknessRoutes.get('/:id', jwtAuth, isIDNumber, sicknessController.getOneSickness);
sicknessRoutes.post('/', jwtAuth, isAdminToken, validateSickness, sicknessController.postSickness);
sicknessRoutes.put('/:id', jwtAuth, isAdminToken, isIDNumber, validateSickness, sicknessController.updateSickness);
sicknessRoutes.delete('/:id', jwtAuth, isAdminToken, isIDNumber, validateSickness, sicknessController.deleteSickness);

export default sicknessRoutes;