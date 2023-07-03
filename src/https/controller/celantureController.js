import fetch from 'node-fetch';
import { Keys } from '../../bootstrap/keys.js';
import { container } from '../../event/Inversify.js';

export class CelantureController {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig
  }

  async postFile(req, res) {
    try {
      console.log('asdfasdf');
      const data = req.redirect(path.join(this.appConfig.getCelanturURL(), 'file'))
      console.log(data)
      res.send('oki')
    } catch(err) {
      console.error(err);
    }
  }
}