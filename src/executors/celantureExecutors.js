import fs from 'fs'
import axios from 'axios'
import BuildUrl from 'build-url'
import { Keys } from '../bootstrap/keys.js'
import { container } from '../event/Inversify.js'
import { axiosError } from '../https/axiosError/axiosError.js'
import { getFileAndRemove } from '../event/filesMenager.js'

export class CelantureExecutors {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig
  }

  async postFile(req, res, path = req.path) {
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

  async getFile(req, res, path = req.path) {
    try {
      const url = BuildUrl(this.appconfig.getCelanturURL(), { path })
      console.info(url)
      const { data } = await axios.get(url, {
        headers: req.headers,
        responseType: 'arraybuffer',
      })
      return data
    } catch (err) {
      res.send(axiosError(err))
    }
  }

  async getWithQuery(req, res, path = req.path) {
    try {
      const url = BuildUrl(this.appconfig.getCelanturURL(), {
        path,
        queryParams: req.query,
      })
      console.info(url)
      const { data } = await axios.get(url, { headers: req.headers })
      return { status: data.file_status }
    } catch (err) {
      res.send(axiosError(err))
    }
  }
}
