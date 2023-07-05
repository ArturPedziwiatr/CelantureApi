import express from 'express'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js'

export const routerCelantur = 
  (controller = container.get(Keys.Celanture.Controller)) => {
    const route = express.Router()
    route.get('/list', (req, res) => controller.getAllFiles(req, res))
    route.get('/file/:id/instance-mask', (req, res) => controller.getInstanceMask(req, res))
    route.get('/file/:id/binary-mask', (req, res) => controller.getBinaryMask(req, res))
    route.get('/file/:id/metadata', (req, res) => controller.getMetadata(req, res))
    route.get('/file/:id/orginal', (req, res) => controller.getOrginal(req, res))
    route.get('/file/:id/anonymised', (req, res) => controller.getAnonymised(req, res))
    route.get('/file/:id/status', (req, res) => controller.getStatus(req, res))
    route.post(
      '/file',
      container.get(Keys.Multer).filesUpload,
      (req, res) => controller.postFile(req, res)
    )
    return route
  }
