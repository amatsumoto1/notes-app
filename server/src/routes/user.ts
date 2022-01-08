import { Router } from 'express';
import { UserController } from '../controllers/user';
import { verifyToken } from '../middleware/auth';

export const getUserRoutes = () => {
    const router = Router();

    router.post('/register', UserController.register);
    router.post('/login', UserController.login);
    router.get('/logout', verifyToken, UserController.logout);

    return router;
}