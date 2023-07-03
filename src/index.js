import fetch from 'node-fetch'
import path from 'path'
import express from 'express'
import _ from 'lodash'
import { parse } from 'yaml'
import fs from 'fs'
import { AppConfig } from './config/appConfig'
const xd = parse(fs.readFileSync('./api-config.yml', 'utf-8'))

const config = new AppConfig()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Everything is good')
})

app.post('/singin', async (req, res) => {
  console.log(global.CONFIG);
  try {
    const red = await fetch('http://api.celantur.com/v1/signin/', {
      method: 'post',
      body: JSON.stringify(req.body)
    })
    //console.log(await red.json());
    res.send(red)
  } catch {}
  
})

app.listen(8080, () => console.log('Api running'))