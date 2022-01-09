import { NoteModel, NoteInstance } from '../models/notes';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';

interface NoteViewModel {
    id: number,
    title?: string,
    content?: string,
    color?: string,
    favorite: boolean
}

const mapToViewModel = (note: NoteInstance): NoteViewModel => {
    return {
        id: note.id,
        title: note.title === null ? undefined: note.title,
        content: note.content === null ? undefined: note.content,
        color: note.color === null ? undefined : note.color,
        favorite: note.favorite
    }
}

export const NotesController = {
    getAllNotes: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const notes = await NoteModel.findAll({ where: { userId: userId }});
            const viewModels = notes.map(mapToViewModel);
            return res.status(HttpCodes.Ok).send({ notes: viewModels });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    createNote: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const { title, content, color, favorite } = req.body;
            const createdNote = await NoteModel.create({
                title: title,
                content: content,
                color: color,
                userId: userId,
                favorite: !!favorite
            });

            const viewModel = mapToViewModel(createdNote);
            return res.status(HttpCodes.Created).send({ note: viewModel });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    updateNote: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const {
                id,
                title,
                content,
                color,
                favorite,
            } = req.body;

            const currentNote = await NoteModel.findByPk(id);
            if (currentNote) {
                const updatedNote = await currentNote.update({
                    id: id,
                    title: title,
                    content: content,
                    color: color,
                    favorite: !!favorite,
                    userId: userId
                });
                const viewModel = mapToViewModel(updatedNote);
                return res.status(HttpCodes.Ok).send({ note: viewModel });
            }
            else {
                const createdNote = await NoteModel.create({
                    id: id,
                    title: title,
                    content: content,
                    color: color,
                    favorite: !!favorite,
                    userId: userId
                });
                const viewModel = mapToViewModel(createdNote);
                return res.status(HttpCodes.Created).send({ note: viewModel });
            }
        }
        catch (err) {
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    deleteNote: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const id = req.params.id;
            console.log(id);
            const note = await NoteModel.findByPk(id);
            if (!note) {
                return res.sendStatus(HttpCodes.NotFound);
            }
            if (note.userId !== userId) {
                return res.sendStatus(HttpCodes.Forbidden);
            }

            note.destroy();
            return res.sendStatus(HttpCodes.NoContent);
        }
        catch (err) {
            return res.sendStatus(HttpCodes.BadRequest);
        }
    }
}