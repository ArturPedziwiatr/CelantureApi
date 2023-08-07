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
import { bootstrapValidators } from '@/bootstrap/bootstrapValidators'
import { WFSService } from '@/services/WFS/WFSService'
import { WMSController } from '@Controller/WMSController'
import { IWMSController } from '@/interface/WMS/IWMSController';
import { IWFSController } from '@/interface/WFS/IWFSController';
import { IWFSService } from '@/interface/WFS/IWFSService';

const config = parse(fs.readFileSync('./api-config.yml', 'utf-8'))
export function bootstrap(container: Container, app: Express) {
  container.bind<any>(MapTypes.Config).toConstantValue(new AppConfig(config))
  container.bind<any>(MapTypes.Http.Middleware.Multer).to(MulterMIddleware)
  
  bootstrapWFS(container)
  bootstrapWMS(container)
  bootstrapCelanture(container)
  bootstrapValidators(container)
  bootstrapRoutes(app, container)
}

export function bootstrapWMS(container: Container) {
  container.bind<IWMSController>(MapTypes.Http.Controller.WMS).to(WMSController)
}

export function bootstrapWFS(container: Container) {
  container.bind<IWFSController>(MapTypes.Http.Controller.WFS).to(WFSController)
  container.bind<IWFSService>(MapTypes.Services.WFSService).to(WFSService)
}

export function bootstrapCelanture(container: Container) {
  container.bind<any>(MapTypes.Http.Middleware.Celanture).to(CelantureMiddleware)
  container.bind<any>(MapTypes.Http.Controller.Celanture).to(CelantureController)
  container.bind<any>(MapTypes.Executors.Celanture).to(CelantureExecutors)
}

export function bootstrapRoutes(app: Express ,container: Container) {
  container.bind<any>(MapTypes.Routes.Manager).toConstantValue(new RouterManager(app, container))
}