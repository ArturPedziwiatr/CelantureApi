import { container } from '../../event/Inversify.js'
import { Keys } from '../../bootstrap/keys.js'
import axios from 'axios'
import { axiosError } from '../axiosError/axiosError.js'
import connectBusboy from 'connect-busboy'
import multer from 'multer'

export class CelantureMiddleware {
  constructor(appConfig = container.get(Keys.Config)) {
    this.appConfig = appConfig
  }

  authorization = async (req, res, next) => {
    try {
      const { data } = await axios.post(
        `${this.appConfig.getCelanturURL()}/signin`,
        this.appConfig.getCelanturCredential()
      )
      const token = data.AuthenticationResult.AccessToken
      req.headers = { Authorization: token }
      next()
    } catch (err) {
      res.send(axiosError(err))
    }
  }
}
