import { Request, Response } from 'express-serve-static-core'

export interface IWMSController {
  redirectWMS(req: Request, res: Response): Promise<void>
}