import fs from 'fs'
import { parse } from 'yaml'
import { Keys } from './keys.js'
import { container } from '../event/Inversify.js'
import { AppConfig } from '../config/appConfig.js'
import { CelantureMiddleware } from '../https/middleware/celantureAuth.js'
import { CelantureController } from '../https/controller/celantureController.js'
import { CelantureExecutors } from '../executors/celantureExecutors.js'
import { MulterMIddleware } from '../https/middleware/multerMiddleware.js'
import { RouterMenager } from '../routes/routes.js'

const config = parse(fs.readFileSync('./api-config.yml', 'utf-8'))
export function bootstrap() {
  container.bind(Keys.Config).toValue(new AppConfig(config))
  container.bind(Keys.Celanture.Middleware).to(CelantureMiddleware)
  container.bind(Keys.Celanture.Controller).to(CelantureController)
  container.bind(Keys.Celanture.Executors).to(CelantureExecutors)
  container.bind(Keys.Multer).to(MulterMIddleware)
  container.bind(Keys.Routes).to(RouterMenager)
}