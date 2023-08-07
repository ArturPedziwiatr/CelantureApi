import { IWMSController } from '@/interface/WMS/IWMSController'
import { MapTypes } from '@MapTypes'
import express from 'express'
import { Container } from 'inversify'

export default function routerWMS(container: Container) {
    const route = express.Router()
    const WMS = container.get<IWMSController>(MapTypes.Http.Controller.WMS)
    route.get(
      '/redirectWMS',
      (req, res) => WMS.redirectWMS(req, res),
    )

    return route
  }
