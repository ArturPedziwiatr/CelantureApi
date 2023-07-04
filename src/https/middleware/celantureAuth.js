import { container } from '../../event/Inversify.js';
import { Keys } from '../../bootstrap/keys.js';
import axios from 'axios';
import { axiosError } from '../axiosError/axiosError.js';

export class CelantureMiddleware {
  constructor(appConfig = container.get(Keys.Config)) {
    this.appConfig = appConfig;
  }

  authorization = async (req, res, next) => axios
      .post(
        `${this.appConfig.getCelanturURL()}/signin`,
        this.appConfig.getCelanturCredential()
      )
      .then((res) => res.data.AuthenticationResult.AccessToken)
      .then((token) => req.headers = { Authorization: token })
      .catch((err) => res.send(axiosError(err)))
      .finally(() => next());
}
