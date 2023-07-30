import fs from 'fs'
import axios from 'axios'
import BuildUrl from 'build-url'
import { Keys } from '../bootstrap/keys.js'
import { container } from '../event/Inversify.js'
import { axiosError } from '../https/axiosError/axiosError.js'

export class CelantureExecutors {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig
  }

  async postFile(req, res) {
    try {
      const { headers, query: queryParams, fileMetadata, path }  = req
      console.log(queryParams);
      const file = fs.readFileSync(fileMetadata.path)
      const url = BuildUrl(this.appconfig.getCelanturURL(),{
        path,
        queryParams
      })
      console.info(url)
      fs.unlink(fileMetadata.path, (err) => {
        if (err) throw err 
      })
      const { data } = await axios.post(
        url,
        file,
        { headers }
      )
      return { file_id } = data
    } catch (err) {
      console.error(err.data);
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
