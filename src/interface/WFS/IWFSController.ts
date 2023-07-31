import { Request, Response } from 'express-serve-static-core'

export interface IWFSController {
  getFeaturesList(req: Request, res: Response): Promise<void>
}