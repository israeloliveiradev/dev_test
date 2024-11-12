import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.get('/:id', userController.getUserById.bind(userController));

export default router;