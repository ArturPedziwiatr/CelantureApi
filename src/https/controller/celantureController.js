import fetch from 'node-fetch';
import fs from 'fs';
import { Keys } from '../../bootstrap/keys.js';
import { container } from '../../event/Inversify.js';
import {
  TextEncoder,
  TextDecoder,
  EncodingIndexes,
  getEncoding,
} from 'text-decoding';
import axios from 'axios';
import { axiosError } from '../axiosError/axiosError.js';

export class CelantureController {
  constructor(appconfig = container.get(Keys.Config)) {
    this.appconfig = appconfig;
  }

  async postFile(req, res) {
    try {
      const { headers, query, auth } = req;

      console.log(`${this.appconfig.getCelanturURL()}${req.path}`);
      const data = await axios.get(
        `${this.appconfig.getCelanturURL()}${req.path}`,
        {
          headers,
        }
      );
      const xd = await data.arrayBuffer();
      console.log(xd);
      const xdasd = fs.writeFileSync('./data/asd.jpg', Buffer.from(xd));
      res.send('xdasd');
    } catch {
      res.send('sad');
    }
  }

  async getMetadata(req, res) {
    const { headers, query, auth } = req;
    let file = ''
    //console.log(`${this.appconfig.getCelanturURL()}${req.path}`)
    await axios
      .get(`${this.appconfig.getCelanturURL()}${req.path}`, {
        headers
      })
      .then(({ data }) => {
        const byteArray = new Uint8Array(data);
        console.log(byteArray);
        byteArray.forEach((element, index) => {
          file += element
        });
      })
      .catch((err) => res.send(axiosError(err)))
      console.log(file)
      // const xdasd = fs.writeFile('./data/asd.png', file, (err) => {
      //   if (err) throw err
      //   console.log('The file has been saved!')
      // })
      // console.log(xdasd);
      res.send('oki')
  }

  async getAllFiles(req, res) {
    const { headers, auth, query } = req;
    fetch(`${this.appconfig.getCelanturURL()}/list`, {
      method: 'get',
      headers,
      query,
      auth,
    })
      .then(async (res) => await res.text())
      .then((json) => res.send(json))
      .catch((err) => res.send(err));
  }
}
