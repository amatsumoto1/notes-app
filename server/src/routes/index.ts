import { Router } from 'express';
import { getUserRoutes } from './user';
import { getNoteRoutes } from './notes';

export const getRoutes = () => {
    const router = Router();

    router.use('/user', getUserRoutes());
    router.use('/notes', getNoteRoutes());

    return router;
}