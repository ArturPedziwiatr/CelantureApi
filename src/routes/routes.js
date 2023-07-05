import { routerCelantur } from './routesCelanture.js'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js';

export class RouterMenager {
  constructor(
    celanturController = container.get(Keys.Celanture.Controller)
  ) {
    this.celanturController = celanturController
  }

  initRoutes(app) {
    app.get('/', () => {
      console.log(req.body)
      res.send('Everything is good')
    })
    app.use(
      '/v1/celantur',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      routerCelantur()
    );
    app.post(
      '/v1/file',
      [
        container.get(Keys.Multer).filesUpload,
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      (req, res) => this.celanturController.postFile(req, res)
    );
  }
}