import { Request } from 'express-serve-static-core';
export interface IRequestFile extends Request<{
    files: Express.Multer.File[]
 }> {
}
