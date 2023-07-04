import express from 'express'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js'

export const routerCelantur = 
  (controller = container.get(Keys.Controller.Celanture)) => {
    const route = express.Router()
    route.get('/list', (req, res) => controller.getAllFiles(req, res))
    route.get('/file/:id/instance-mask', (req, res) => controller.getMetadata(req, res))
    route.get('/file/:id/metadata', (req, res) => controller.getMetadata(req, res))
    route.get('/file/:id/binarymask', (req, res) => controller.getMetadata(req, res))
    route.get('/file/:id/orginal', (req, res) => controller.getMetadata(req, res))
    route.get('/file/:id/anonymized', (req, res) => controller.getMetadata(req, res))
    return route
  }
