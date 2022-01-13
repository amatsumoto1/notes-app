import { TagModel, TagInstance } from '../models/tags';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';

export interface TagViewModel {
    id: number,
    content?: string
}

const mapToViewModel = (tag: TagInstance): TagViewModel => {
    return {
        id: tag.id,
        content: tag.content
    };
}

export const TagController = {
    getAllTags: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const tags = await TagModel.findAll({ where: { userId: userId }});
            const viewModels = tags.map(mapToViewModel);
            return res.status(HttpCodes.Ok).send({ tags: viewModels });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    createTag: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const { content } = req.body;
            const createdTag = await TagModel.create({
                content: content,
                userId: userId
            });

            const viewModel = mapToViewModel(createdTag);
            return res.status(HttpCodes.Created).send({ tag: viewModel });
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    updateTag: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const { id, content } = req.body;

            const currentTag = await TagModel.findByPk(id);
            if (currentTag) {
                if (currentTag.userId !== userId) {
                    return res.sendStatus(HttpCodes.Forbidden);
                }

                const updatedTag = await currentTag.update({
                    content: content
                });
                const viewModel = mapToViewModel(updatedTag);
                return res.status(HttpCodes.Ok).send({ tag: viewModel });
            }
            else {
                const createdTag = await TagModel.create({
                    id: id,
                    content: content,
                    userId: userId
                });
                const viewModel = mapToViewModel(createdTag);
                return res.status(HttpCodes.Created).send({ tag: viewModel });
            }
        }
        catch (err) {
            console.log(err);
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    deleteTag: async (req: Request, res: Response): Promise<Response> => {
        const userId = req.user!.userId;
        try {
            const id = req.params.id;
            const tag = await TagModel.findByPk(id);
            if (!tag) {
                return res.sendStatus(HttpCodes.NotFound);
            }
            if (tag.userId !== userId) {
                return res.sendStatus(HttpCodes.Forbidden);
            }

            tag.destroy();
            return res.sendStatus(HttpCodes.NoContent);
        }
        catch (err) {
            return res.sendStatus(HttpCodes.BadRequest);
        }
    }
}