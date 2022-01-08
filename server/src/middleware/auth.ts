import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HttpCodes } from '../constants/codes';



export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.sendStatus(HttpCodes.Unauthorized);
    }

    try {
        const user = verify(token, 'testverifytokensecret');

        req.user = user;
        return next();

    }
    catch (err) {
        console.log(err);
        return res.sendStatus(HttpCodes.Unauthorized);
    }
}