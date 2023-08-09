import multer, { Multer } from 'multer'
import { Response } from 'express-serve-static-core';
import { NextFunction } from 'express'
import { IRequestFile } from '@/interface/request/IRequestFile';
import { injectable } from 'inversify';
@injectable()
export class MulterMIddleware {
  private upload: Multer
  constructor() {
    this.upload = multer({ dest: 'data/' })
  }

  public filesUpload() {
    // req.setTimeout(0)
    return this.upload;
    // try {
    //   this.upload.any()(req, res, (err: any) => {
    //     try {
    //       if (err) throw err
    //       if (req.query) Object.assign(req.query, { name: req.files[0].originalname })
    //       if (!req.query) req.query = { name: req.files[0].originalname }
    //       Object.assign(req, { fileMetadata: req.files[0] })
    //       next()
    //     } catch (err) {
    //       res.send(err)
    //     }
    //   })
    // } catch (e) {
    //   res.send(e)
    // }
  }
}
