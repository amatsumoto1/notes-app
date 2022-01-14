import { UserModel } from '../models/user';
import { Request, Response } from 'express';
import { HttpCodes } from '../constants/codes';
import { hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const tokenList: {[refreshToken: string]: { refreshToken: string, token: string}} = {};

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
            const userInfo = {
                userId: user.id,
                username
            };

            const token = sign(userInfo, 'testverifytokensecret', {
                expiresIn: '2h'
            });

            const refreshToken = sign(userInfo, 'testrefreshtokensecret', {
                expiresIn: '5d'
            });

            tokenList[refreshToken] = {
                token: token,
                refreshToken: refreshToken
            };

            return res.status(HttpCodes.Ok).send({
                username: username,
                token: token,
                refreshToken: refreshToken
            });
        }

        return res.sendStatus(HttpCodes.BadRequest);
    },
    token: (req: Request, res: Response) => {
        const userId = req.user!.userId;
        const { username, refreshToken } = req.body;

        if (!username || !refreshToken) {
            return res.sendStatus(HttpCodes.BadRequest);
        }

        if (!(refreshToken in tokenList)) {
            return res.sendStatus(HttpCodes.NotFound);
        }

        const userInfo = {
            userId: userId,
            username
        };

        const token = sign(userInfo, 'testverifytokensecret', {
            expiresIn: '2h'
        });

        tokenList[refreshToken].token = token;

        return res.status(200).send({
            token: token
        });
    },
    logout: (req: Request, res: Response): Response => {
        return res.status(HttpCodes.Ok).send({message: 'logged out.'});
    }
}