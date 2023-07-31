import { Request, Response } from 'express-serve-static-core';
import { injectable } from 'inversify';

@injectable()
export class WFSController {
  constructor(
  ) {}

  async getWFSFeatures(req: Request, res: Response) {
    try {
    } catch(err) {
      res.send(err)
    }
  }

 
}
