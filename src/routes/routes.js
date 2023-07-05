import { routerCelantur } from './routesCelanture.js'
import { container } from '../event/Inversify.js'
import { Keys } from '../bootstrap/keys.js';

export class RouterMenager {
  constructor() {}

  initRoutes(app) {
    app.get('/', () => {
      console.log(req.body)
      res.send('Everything is good')
    });
    app.use(
      '/v1/celantur',
      [
        container.get(Keys.Celanture.Middleware).authorization,
      ],
      routerCelantur()
    );
  }
}