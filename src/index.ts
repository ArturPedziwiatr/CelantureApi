import "reflect-metadata"
import express from 'express'
import { bootstrap } from './bootstrap/bootstrap'
import { Container } from 'inversify'


const container = new Container()
const app = express()
bootstrap(container, app)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(8080, () => console.log('Api running'))
