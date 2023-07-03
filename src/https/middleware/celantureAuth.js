import path from 'path';
import fetch from 'node-fetch';
import { container } from '../../event/Inversify.js';
import { Keys } from '../../bootstrap/keys.js';

export class CelantureMiddleware {
  constructor(appConfig = container.get(Keys.Config)) {
    this.appConfig = appConfig;
  }

  authorization = async (req, res, next) => {
    try {
      const data = await fetch(
        path.join(this.appConfig.getCelanturURL(), 'signin/'),
        {
          method: 'post',
          body: this.appConfig.getCelanturCredential(),
        }
      );
      const token = (await data.json()).AuthenticationResult.AccessToken;
      req.auth = {
        Bearer: token,
      };
      next();
    } catch (err) {
      console.error(err);
      next();
    }
  };
}
