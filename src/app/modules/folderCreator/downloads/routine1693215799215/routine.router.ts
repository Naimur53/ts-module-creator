
import express from 'express'; 
import { RoutineController } from './routine.controller';
const router = express.Router();

router.get('/', RoutineController.getAllRoutine);
router.get('/:id', RoutineController.getSingleRoutine);

router.post(
  '/', 
  RoutineController.createRoutine
);

router.patch(
  '/:id', 
  RoutineController.updateRoutine
);
router.delete('/:id', RoutineController.deleteRoutine);

export const RoutineRoutes = router;
  
  