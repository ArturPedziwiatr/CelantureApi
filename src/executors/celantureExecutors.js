import axios from 'axios'
import { Keys } from '../bootstrap/keys.js'
import { container } from '../event/Inversify.js'
import { axiosError } from '../https/axiosError/axiosError.js'

export class CelantureExecutors {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig
  }

  async postFile(req, res) {
    try {
      const { headers, query, body, auth } = req
      console.info(`https://api.celantur.com/v1/file?method=blur&debug=True&person=True`)
      const { data } = await axios.post(
        `${this.appconfig.getCelanturURL()}${req.path}`,
        { headers, body }
      )

      return data
    } catch (err) {
      res.send(axiosError(err))
    }
  }

  async getMetadata(req, res) {
    console.info(`${this.appconfig.getCelanturURL()}${req.path}`)
    try {
      const { data } = await axios
      .get(
        `${this.appconfig.getCelanturURL()}${req.path}`,
        { headers: req.headers },
      )

      return data
    } catch(err) {
      res.send(axiosError(err))
    }
  }

  async getMask(req, res) {
    console.info(`${this.appconfig.getCelanturURL()}${req.path}`)
    try {
      const { data } = await axios.get(
        `${this.appconfig.getCelanturURL()}${req.path}`,
        { headers: req.headers, responseType: 'arraybuffer'},
      )
      return data
    } catch(err) {
      res.send(axiosError(err))
    } 
  }

  async getStatus(req, res) {
    console.info(`${this.appconfig.getCelanturURL()}${req.path}`)
    try {
      const { data } = await axios.get(
        `${this.appconfig.getCelanturURL()}${req.path}`,
        { headers: req.headers, query: req.query },
      )
      return data
    } catch(err) {
      res.send(axiosError(err))
    } 
  }
}
