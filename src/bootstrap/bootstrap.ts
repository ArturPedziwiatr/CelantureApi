import "reflect-metadata"
import fs from 'fs'
import { parse } from 'yaml'
import { Container } from 'inversify';
import { AppConfig } from '@/config/appConfig'
import { CelantureMiddleware } from '@/https/middleware/celantureAuth'
import { CelantureController } from '@Controller/celantureController'
import { CelantureExecutors } from '@/executors/celantureExecutors'
import { MulterMIddleware } from '@/https/middleware/multerMiddleware'
import { RouterManager } from '@/routes/routes'
import { WFSController } from '@Controller/WFSController'
import { MapTypes } from '@MapTypes'
import { Express } from 'express'


const config = parse(fs.readFileSync('./api-config.yml', 'utf-8'))
export function bootstrap(container: Container, app: Express) {
  container.bind<any>(MapTypes.Config).toConstantValue(new AppConfig(config))
  container.bind<any>(MapTypes.Http.Middleware.Multer).to(MulterMIddleware)
  
  bootstrapWFS(container)
  bootstrapCelanture(container)
  container.bind<any>(MapTypes.Routes.Manager).toConstantValue(new RouterManager(app, container))
}

export function bootstrapWFS(container: Container) {
  container.bind<any>(MapTypes.Http.Controller.WFS).to(WFSController)
}

export function bootstrapCelanture(container: Container) {
  container.bind<any>(MapTypes.Http.Middleware.Celanture).to(CelantureMiddleware)
  container.bind<any>(MapTypes.Http.Controller.Celanture).to(CelantureController)
  container.bind<any>(MapTypes.Executors.Celanture).to(CelantureExecutors)
}