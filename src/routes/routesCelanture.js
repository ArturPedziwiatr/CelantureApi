import express from 'express'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js'

export const routerCelantur = 
  (
    controller = container.get(Keys.Celanture.Controller),
    multer = container.get(Keys.Multer),
  ) => {
    const route = express.Router()
    route.get(
      '/list',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getAllFiles(req, res),
    )

    route.get(
      '/file/:id/instance-mask',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getInstanceMask(req, res),
    )

    route.get(
      '/file/:id/binary-mask',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getBinaryMask(req, res),
    )

    route.get(
      '/file/:id/metadata',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getMetadata(req, res),
    )

    route.get(
      '/file/:id/orginal',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getOrginal(req, res),
    )

    route.get(
      '/file/:id/anonymised',
      [
        container.get(Keys.Multer).filesUpload,
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getAnonymised(req, res),
    )

    route.get(
      '/file/:id/status',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.getStatus(req, res),
    )

    route.post(
      '/file',
      [
        container.get(Keys.Multer).filesUpload,
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => controller.postFile(req, res),
    )

    return route
  }
