import fs from 'fs'
import { inject, injectable } from 'inversify'
import { MapTypes } from '@MapTypes'
import { IAppConfig } from '@Interface/config/IAppConfig'
import { Request, Response } from 'express-serve-static-core'
import { ICelanturController } from '@Interface/celantur/ICelanturController'

@injectable()
export class CelantureController implements ICelanturController {
  constructor(
    @inject(MapTypes.Config) protected appConfig: IAppConfig,
    @inject(MapTypes.Executors.Celanture) protected celanturExecutors: any,
  ) {}

  async postFile(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.postFile(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getInstanceMask(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.getFile(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getBinaryMask(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.getFile(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getMetadata(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.get(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getOrginal(req: Request, res: Response): Promise<void> {
    try {
      res.send('todo')
    } catch {
      res.send('sad')
    }
  }

  async getAnonymised(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.getFile(req, res)
      fs.writeFileSync('data/asdf.jpg',result)
      res.send('inprogress')
    } catch (err) {
      res.send(err)
    }
  }

  async getStatus(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.get(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getAllFiles(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.celanturExecutors.getWithQuery(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }
}
