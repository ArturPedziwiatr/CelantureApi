import { MapTypes } from '@MapTypes'
import express from 'express'
import { Container } from 'inversify'

export default function routerWFS(container: Container) {
    const route = express.Router()
    const controller = container.get<any>(MapTypes.Http.Controller.WFS)
    route.get(
      '/getWFS',
      (req, res) => controller.getWFSFeatures(req, res),
    )

    return route
  }
