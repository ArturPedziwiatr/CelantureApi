import express from 'express'
import _ from 'lodash'
import { bootstrap } from './bootstrap/bootstrap.js'
import { container } from './event/Inversify.js'
import { Keys } from './bootstrap/keys.js'

bootstrap();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
container.get(Keys.Routes).initRoutes(app)
app.listen(8080, () => console.log('Api running'))
