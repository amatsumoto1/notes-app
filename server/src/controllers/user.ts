import { UserModel } from '../models/user';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';
import { hashSync, compareSync } from 'bcrypt';
import jwt, { sign } from 'jsonwebtoken';

export const UserController = {
    register: async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.sendStatus(HttpCodes.BadRequest);
        }

        try {

            const user = await UserModel.findOne({ where: { username: username }});
            if (user) {
                return res.sendStatus(HttpCodes.Conflict);
            }
            const hashedPassword = hashSync(password, 10);

            await UserModel.create({
                username: username,
                password: hashedPassword
            });

            return res.status(HttpCodes.Created).send({message: 'Created'});
        }
        catch (err) {
            return res.sendStatus(HttpCodes.BadRequest);
        }
    },
    login: async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.sendStatus(HttpCodes.BadRequest);
        }

        const user = await UserModel.findOne({ where: { username: username }});
        if (!user) {
            return res.sendStatus(HttpCodes.BadRequest);
        }

        if (await compareSync(password, user.password)) {
            const token = sign({
                userId: user.id,
                username
            }, 'testverifytokensecret', {
                expiresIn: '2h'
            });

            return res.status(HttpCodes.Ok).send({
                username: username,
                token: token
            });
        }

        return res.sendStatus(HttpCodes.BadRequest);
    },
    logout: (req: Request, res: Response): Response => {
        return res.status(HttpCodes.Ok).send({message: 'logged out.'});
    }
}