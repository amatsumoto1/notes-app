import { Router } from 'express';
import { TagController } from '../controllers/tags';
import { verifyToken } from '../middleware/auth';

export const getTagRoutes = () => {
    const router = Router();

    router.get('/', verifyToken, TagController.getAllTags);
    router.post('/', verifyToken, TagController.createTag);
    router.put('/:id', verifyToken, TagController.updateTag);
    router.delete('/:id', verifyToken, TagController.deleteTag);

    return router;
}