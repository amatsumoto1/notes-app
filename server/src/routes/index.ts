import { Router } from 'express';
import { getUserRoutes } from './user';
import { getNoteRoutes } from './notes';
import { getTagRoutes } from './tags';

export const getRoutes = () => {
    const router = Router();

    router.use('/user', getUserRoutes());
    router.use('/notes', getNoteRoutes());
    router.use('/tags', getTagRoutes());

    return router;
}