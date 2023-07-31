import { Request, Response } from 'express-serve-static-core'

export interface IWFSController {
  getWFSFeatures(req: Request, res: Response): Promise<void>
}