import { Keys } from '../../bootstrap/keys.js'
import { container } from '../../event/Inversify.js'
import { axiosError } from '../axiosError/axiosError.js'

export class CelantureController {
  constructor(
    appconfig = container.get(Keys.Config),
    executors = container.get(Keys.Celanture.Executors),
    ) {
    this.appconfig = appconfig
    this.executors = executors
  }

  async postFile(req, res) {
    try {
      const {url, body, headers, query} = req
      const result = await this.executors.postFile(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

  async getInstanceMask(req, res) {
    try {
      const result = await this.executors.getMask(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }
 
  async getBinaryMask(req, res) {
    try {
      const result = await this.executors.getMask(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }
 
  async getMetadata(req, res) {
    try {
      const result = await this.executors.getMetadata(req,res)
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
      const result = await this.executors.getStatus(req,res)
      res.send('inprogress')
    } catch {
      res.send('sad')
    }
  }
 
  async getStatus(req, res) {
    try {
      const result = await this.executors.getStatus(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }
 
  async getAllFiles(req, res) {
    try {
      const result = await this.executors.getStatus(req,res)
      res.send(result)
    } catch {
      res.send('sad')
    }
  }

}
