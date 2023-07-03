import fs from 'fs'
import { parse } from 'yaml'
import { Keys } from './keys.js'
import { container } from '../event/Inversify.js'
import { AppConfig } from '../config/appConfig.js'
import { CelantureMiddleware } from '../https/middleware/celantureAuth.js'
import { CelantureController } from '../https/controller/celantureController.js'

const config = parse(fs.readFileSync('./api-config.yml', 'utf-8'))
export function bootstrap() {
  container.bind(Keys.Config).toValue(new AppConfig(config))
  container.bind(Keys.Middleware.Celanture).to(CelantureMiddleware)
  container.bind(Keys.Controller.Celanture).to(CelantureController)
}