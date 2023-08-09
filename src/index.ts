import "reflect-metadata"
import express from 'express'
import { bootstrap } from './bootstrap/bootstrap'
import { Container } from 'inversify'
import cors from 'cors'

const PORT = 8080;
const container = new Container()
const app = express()
const corsOptions: cors.CorsOptions = {
  origin: [
    'http://localhost:3000'
  ]
}
app.use(cors())
bootstrap(container, app)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => console.log('Api running on port:', PORT))
