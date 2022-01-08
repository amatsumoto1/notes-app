import { UserModel } from '../models/user';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';

export const UserController = {
    register: (req: Request, res: Response): Response => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(HttpCodes.BadRequest);
        }

        return res.status(HttpCodes.Created);
    }
}