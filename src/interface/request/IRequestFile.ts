import { Request } from 'express-serve-static-core';

export interface IRequestFile extends Request {
  fileMetadata: any
  files: any
}