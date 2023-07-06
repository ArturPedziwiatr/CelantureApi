import fs from 'fs'
import { Keys } from '../../bootstrap/keys.js'
import { container } from '../../event/Inversify.js'
import { axiosError } from '../axiosError/axiosError.js'

export class CelantureController {
  constructor(
    appconfig = container.get(Keys.Config),
    executors = container.get(Keys.Celanture.Executors)
  ) {
    this.appconfig = appconfig
    this.executors = executors
  }

  async postFile(req, res) {
    try {
      const result = await this.executors.postFile(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getInstanceMask(req, res) {
    try {
      const result = await this.executors.getMask(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getBinaryMask(req, res) {
    try {
      const result = await this.executors.getMask(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getMetadata(req, res) {
    try {
      const result = await this.executors.getMetadata(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getOrginal(req, res) {
    try {
      res.send('todo')
    } catch {
      res.send('sad')
    }
  }

  async getAnonymised(req, res) {
    try {
      // const file = await this.executors.postFile(req, res, '/file')
      // if (!file) throw new Error('Cannot uploaded file')

      // await asyncFunction(3000)
      // file = await this.executors.getStatus(req, res, `/file/${file.id}/status`)
      // console.info(file)

      const result = await this.executors.getAnonymised(req, res)
      fs.writeFileSync('data/asdf.jpg',result)
      res.send('inprogress')
    } catch (err) {
      res.send(err)
    }
  }

  async getStatus(req, res) {
    try {
      const result = await this.executors.getStatus(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getAllFiles(req, res) {
    try {
      const result = await this.executors.getStatus(req, res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async watchStatus(req, res) {
    try {
      let file
      do {
        file = await this.executors.getStatus(
          req,
          res,
          `/file/${file.id}/status`
        )
        console.info(file)
      } while (file.status !== 'done')
      return true
    } catch (err) {
      res.send(err)
    }
  }

  asyncFunction = (t) => new Promise((resolve) => setTimeout(resolve, t))
}
