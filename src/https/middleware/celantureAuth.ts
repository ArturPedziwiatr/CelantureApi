import axios from 'axios'
import { axiosError } from '@/https/axiosError/axiosError'
import { inject, injectable } from 'inversify'
import { MapTypes } from '@MapTypes'
import { IAppConfig } from '@Interface/config/IAppConfig'
import { Request, Response } from 'express-serve-static-core';
import { NextFunction } from 'express'

@injectable()
export class CelantureMiddleware {
  constructor(
    @inject(MapTypes.Config) protected appConfig: IAppConfig
  ) {}

  public async authorization(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = await axios.post(
        `${this.appConfig.getCelanturURL()}/signin`,
        this.appConfig.getCelanturCredential()
      )
      const token = data.AuthenticationResult.AccessToken
      req.headers = { Authorization: token }
      next()
    } catch (err) {
      res.send(axiosError(err))
    }
  }
}
