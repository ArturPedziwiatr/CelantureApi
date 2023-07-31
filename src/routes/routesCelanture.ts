import express from 'express'
import { MapTypes } from '@MapTypes'
import { Container } from 'inversify'
import { Request, Response } from 'express-serve-static-core'

export default function routerCelantur(container: Container ) {
    const route = express.Router()
    const controller = container.get<any>(MapTypes.Http.Controller.Celanture)
    const celantureMiddleware = container.get<any>(MapTypes.Http.Middleware.Celanture)
    const multerMiddleware = container.get<any>(MapTypes.Http.Middleware.Multer)

    route.get(
      '/list',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getAllFiles(req, res),
    )

    route.get(
      '/file/:id/instance-mask',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getInstanceMask(req, res),
    )

    route.get(
      '/file/:id/binary-mask',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getBinaryMask(req, res),
    )

    route.get(
      '/file/:id/metadata',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getMetadata(req, res),
    )

    route.get(
      '/file/:id/orginal',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getOrginal(req, res),
    )

    route.get(
      '/file/:id/anonymised',
      [
        multerMiddleware.filesUpload,
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getAnonymised(req, res),
    )

    route.get(
      '/file/:id/status',
      [
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.getStatus(req, res),
    )

    route.post(
      '/file',
      [
        multerMiddleware.filesUpload,
        celantureMiddleware.authorization,
      ],
      (req: Request, res: Response) => controller.postFile(req, res),
    )

    return route
  }
