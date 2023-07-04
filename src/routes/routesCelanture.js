import express from 'express'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js'

export const routerCelantur = 
  (controller = container.get(Keys.Controller.Celanture)) => {
    const route = express.Router()
    route.get('/list', (req, res) => controller.getAllFiles(req, res))
    route.get('/file/:id/instance-mask', (req, res) => controller.postFile(req, res))
    return route
  }
// router.get('/file/:id/anonymised', )
// router.get('/file/:id/binary', )
// router.get('/file/:id/instance', )
// router.get('/file/:id/metadata', )
//routerCelantur.post('/file', controller.postFile)