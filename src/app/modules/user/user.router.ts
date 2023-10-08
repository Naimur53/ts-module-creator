import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
const router = express.Router();

router.get('/', auth(), UserController.getAllUser);
router.get('/:id', auth(), UserController.getSingleUser);

router.post(
  '/',
  validateRequest(UserValidation.createValidation),
  UserController.signInUser
);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateValidation),
  auth(true),
  UserController.updateUser
);
router.delete('/:id', auth(true), UserController.deleteUser);

export const UserRoutes = router;
