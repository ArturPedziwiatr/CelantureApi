import { Request, Response } from 'express-serve-static-core'

export interface ICelanturController {
  postFile(req: Request, res: Response): Promise<void>
  getInstanceMask(req: Request, res: Response): Promise<void>
  getBinaryMask(req: Request, res: Response): Promise<void>
  getMetadata(req: Request, res: Response): Promise<void>
  getOrginal(req: Request, res: Response): Promise<void>
  getAnonymised(req: Request, res: Response): Promise<void>
  getStatus(req: Request, res: Response): Promise<void>
  getAllFiles(req: Request, res: Response): Promise<void>
}