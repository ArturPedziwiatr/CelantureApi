import express from 'express'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js'

export const routerWFS = 
  (
    controller = container.get(Keys.Celanture.Controller),
    multer = container.get(Keys.Multer),
  ) => {
    const route = express.Router()

    route.get(
      '/list',
      (req, res) => controller.getAllFiles(req, res),
    )

    return route
  }
