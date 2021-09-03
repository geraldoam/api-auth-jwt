import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';

const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.post('/users', userController.store);
router.post('/login', authController.execute);
router.get('/users', authMiddleware, userController.index);

export default router;
