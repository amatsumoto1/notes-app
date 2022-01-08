import { Router } from 'express';
import { getUserRoutes } from './user';

export const getRoutes = () => {
    const router = Router();

    router.use('/user', getUserRoutes());

    return router;
}