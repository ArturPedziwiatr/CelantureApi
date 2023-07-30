import multer from 'multer'
import fs from 'fs'

export class MulterMIddleware {
  constructor() {
    this.upload = multer({ dest: 'data/' })
  }

  filesUpload = (req, res, next) => {
    req.setTimeout(0)
    try {
      this.upload.any()(req, res, (err) => {
        try {
          if (err) throw err
          if (req.query) Object.assign(req.query, { name: req.files[0].originalname })
          if (!req.query) req.query = { name: req.files[0].originalname }
          Object.assign(req, { fileMetadata: req.files[0] })
          next()
        } catch (err) {
          res.send(err)
        }
      })
    } catch (e) {
      res.send(err)
    }
  }
}
