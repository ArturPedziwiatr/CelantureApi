import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'
import { Keys } from '../../bootstrap/keys.js'
import { container } from '../../event/Inversify.js'

export class CelantureController {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig
  }

  async postFile(req, res) {
    try {
      // const { headers, query, auth } = req

      console.log(`${this.appconfig.getCelanturURL()}${req.path}`);
      // const data = await fetch(
      //   `${this.appconfig.getCelanturURL()}${req.path}`,
      //   {
      //     method: 'GET',
      //     headers,
      //     auth
      //   }
      // )
      // const xd = await data.arrayBuffer()
      // console.log(xd)
      // const xdasd = fs.writeFileSync('./asd.jpg',Buffer.from(xd))
      res.send('xdasd')
    } catch {
      res.send('sad')
    }
  }

  async getAllFiles(req, res) {
    const { headers, auth, query } = req
    fetch(`${this.appconfig.getCelanturURL()}/list`, {
      method: 'get',
      headers,
      query,
      auth,
    })
      .then(async (res) => await res.text())
      .then((json) => res.send(json))
      .catch((err) => res.send(err))
  }
}
