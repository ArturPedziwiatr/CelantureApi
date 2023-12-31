import routesCelantur from '@/routes/routesCelanture'
import { Container, injectable } from 'inversify'
import { Express } from 'express'

@injectable()
export class RouterManager {
  constructor(app: Express, container: Container) {
    app.get('/', (req, res) => {
      console.log(req.body)
      res.send('Everything is good')
    })
    app.use('/v1/celantur', routesCelantur(container))
  }
}
