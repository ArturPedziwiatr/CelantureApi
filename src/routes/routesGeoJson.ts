import { Container } from 'inversify'
import express from 'express'
import { MapTypes } from '@/MapTypes'
import { GeoJsonController } from '@/https/controller/GeoJsonController'
import { MulterMIddleware } from '@/https/middleware/multerMiddleware'

export default function(container: Container) {
  const router = express.Router()
  const controller = container.get<GeoJsonController>(MapTypes.Http.Controller.GeoJson)
  const multerMiddleware = container.get<MulterMIddleware>(MapTypes.Http.Middleware.Multer);

  router.post('/upload', multerMiddleware.filesUpload().single('file'), controller.upload)

  return router
}