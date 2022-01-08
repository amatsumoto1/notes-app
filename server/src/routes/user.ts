import express from 'express';
import { UserController } from '../controllers/user';

const getUserRoutes = () => {
    const router = express.Router();

    router.post('/register', UserController.register);
}