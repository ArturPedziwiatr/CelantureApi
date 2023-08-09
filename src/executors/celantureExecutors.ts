import fs from 'fs'
import axios from 'axios'
import { IQueryParams, buildUrl } from 'build-url-ts'
import { axiosError } from '@/https/axiosError/axiosError'
import { inject, injectable } from 'inversify';
import { MapTypes } from '@MapTypes'
import { IAppConfig } from '@Interface/config/IAppConfig'
import { Request, Response } from 'express-serve-static-core';
import { IRequestFile } from '@Interface/request/IRequestFile';

@injectable()
export class CelantureExecutors {
  constructor(
    @inject(MapTypes.Config) protected appConfig: IAppConfig
  ) {}

  // async postFile(req: IRequestFile, res: Response, path = req.path) {
  //   try {
  //     const { headers, query, file, path }  = req
  //     fs.readFileSync(file.path)
  //     const url = buildUrl(this.appConfig.getCelanturURL(),{
  //       path,
  //       queryParams: query as IQueryParams,
  //     })
  //     console.info(url)
  //     fs.unlink(fileMetadata.path, (err) => {
  //       if (err) throw err 
  //     })
  //     const { data } = await axios.post(
  //       url,
  //       file,
  //       { headers }
  //     )
  //     const { file_id } = data as any
  //     return file_id
  //   } catch (err: any) {
  //     console.error(err.data);
  //     res.send(axiosError(err))
  //   }
  // }

  async getFile(req: Request, res: Response, path = req.path) {
    try {
      const url = buildUrl(this.appConfig.getCelanturURL(), { path })
      console.info(url)
      const { data } = await axios.get(url, {
        headers: req.headers,
        responseType: 'arraybuffer',
      })
      return data
    } catch (err) {
      res.send(axiosError(err))
    }
  }

  async getWithQuery(req: Request, res: Response, path = req.path) {
    try {
      const url = buildUrl(this.appConfig.getCelanturURL(), {
        path,
        queryParams: req.query as IQueryParams,
      })
      console.info(url)
      const { data } = await axios.get(url, { headers: req.headers })
      return { status: data.file_status }
    } catch (err) {
      res.send(axiosError(err))
    }
  }
}
