import express from 'express'
import _ from 'lodash'
import { bootstrap } from './bootstrap/bootstrap.js'
import { container } from './event/Inversify.js'
import { Keys } from './bootstrap/keys.js'
import { routerCelantur } from './routes/routesCelanture.js'

bootstrap();
const app = express()
app.use(express.json())
app.get('/', () => {
  console.log(req.body)
  res.send('Everything is good')
});
app.use(
  '/v1/celantur',
  container.get(Keys.Middleware.Celanture).authorization,
  routerCelantur()
);

app.listen(8080, () => console.log('Api running'))
