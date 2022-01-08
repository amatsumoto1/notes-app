import { Router } from 'express';
import { NotesController } from '../controllers/notes';
import { verifyToken } from '../middleware/auth';

export const getNoteRoutes = () => {
    const router = Router();

    router.get('/', verifyToken, NotesController.getAllNotes);
    router.post('/', verifyToken, NotesController.createNote);
    router.delete('/:id', verifyToken, NotesController.deleteNote);

    return router;
}