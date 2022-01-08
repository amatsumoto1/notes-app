import { JwtPayload } from 'jsonwebtoken';

declare global {
   namespace Express {
      export interface User {
         userId: number,
         username: string
      }

      export interface Request {
         user?: User
      }
   }
}