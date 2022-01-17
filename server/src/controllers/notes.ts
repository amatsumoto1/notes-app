import { NoteModel, NoteInstance } from '../models/notes';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';
import { Op } from 'sequelize';

interface NoteInfoViewModel {
    id: number,
    title?: string,
    content?: string,
    color?: string,
    favorite: boolean
}

interface NoteTagViewModel {
    id: number,
    tagId: number,
    description?: string
}

interface NoteViewModel extends NoteInfoViewModel {
    tags: NoteTagViewModel[]
}

const mapToViewModel = (note: NoteInstance): NoteInfoViewModel => {
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
            const criteria = req.query.criteria || '';
            const notes = await NoteModel.findAll({ 
                where: {
                    userId: userId,
                    [Op.or]: {
                        title: {
                            [Op.like]: `%${criteria}%`
                        },
                        content: {
                            [Op.like]: `%${criteria}%`
                        }
                    }
                }
            });
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
                if (currentNote.userId !== userId) {
                    return res.sendStatus(HttpCodes.Forbidden);
                }

                const updatedNote = await currentNote.update({
                    title: title,
                    content: content,
                    color: color,
                    favorite: !!favorite,
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