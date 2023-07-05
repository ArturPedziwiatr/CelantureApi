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
          if (err) {
            throw err
          }
          console.log(req.files);
          Object.assign(req.query, {
            name: req.files[0].originalname
          })
          Object.assign(req.body, {
            data: JSON.stringify(fs.readFileSync(`./data/${req.files[0].filename}`))
          })
          fs.unlink(`./data/${req.files[0].filename}`, (err) => {
            if (err) {
              throw err
            }
          })
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
