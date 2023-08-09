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
import { GeoJsonService } from '@/services/GeoJsonService';
import { WMSController } from '@Controller/WMSController'
import { IWMSController } from '@/interface/WMS/IWMSController';
import { IWFSController } from '@/interface/WFS/IWFSController';
import { IWFSService } from '@/interface/WFS/IWFSService';
import { GeoJsonController } from '@Controller/GeoJsonController';

const config = parse(fs.readFileSync('./api-config.yml', 'utf-8'))
export function bootstrap(container: Container, app: Express) {
  container.bind<any>(MapTypes.Config).toConstantValue(new AppConfig(config))
  container.bind<any>(MapTypes.Http.Middleware.Multer).to(MulterMIddleware)

  bootstrapService(container)
  bootstrapController(container)
  bootstrapMiddleware(container)
  bootstrapValidators(container)
  bootstrapExecutors(container)
  bootstrapRoutes(app, container)
}

function bootstrapController(container: Container) {
  container.bind<any>(MapTypes.Http.Controller.GeoJson).to(GeoJsonController)
  container.bind<IWMSController>(MapTypes.Http.Controller.WMS).to(WMSController)
  container.bind<IWFSController>(MapTypes.Http.Controller.WFS).to(WFSController)
  container.bind<any>(MapTypes.Http.Controller.Celanture).to(CelantureController)
  
}

function bootstrapService(container: Container) {
  container.bind<IWFSService>(MapTypes.Services.WFSService).to(WFSService)
  container.bind<GeoJsonService>(MapTypes.Services.GeoJson).to(GeoJsonService)
}

function bootstrapMiddleware(container: Container) {
  container.bind<any>(MapTypes.Http.Middleware.Celanture).to(CelantureMiddleware)
}

function bootstrapExecutors(container: Container) {
  container.bind<any>(MapTypes.Executors.Celanture).to(CelantureExecutors)
}

function bootstrapRoutes(app: Express, container: Container) {
  container.bind<any>(MapTypes.Routes.Manager).toConstantValue(new RouterManager(app, container))
}

