import { MapTypes } from '@/MapTypes'
import { VALIDATOR_TYPES } from '@/enums/ValidatorTypes'
import { IValidationType } from '@Interface/validator/IValidatorType'
import { Request, Response } from 'express-serve-static-core'
import { inject, injectable } from 'inversify'
import { IWMSController } from '@Interface/WMS/IWMSController'
import { IWFSService } from '@Interface/WFS/IWFSService'
import axios from 'axios'

@injectable()
export class WMSController implements IWMSController {
  constructor(
    @inject(MapTypes.Valiadtors) protected validator:<T>(validationType: IValidationType<T>) => { validate(obj: unknown): Promise<T> },
    @inject(MapTypes.Services.WFSService) protected wfsService: IWFSService,
  ) {}

  async redirectWMS(req: Request, res: Response): Promise<void> {
    try {
      const url = req.query
      if( !url.proxyTo )
        throw new Error('Upsi')
        console.log(url.proxyTo);
        
      const data = await axios.get(url.proxyTo as string)
      console.log(url.proxyTo);
      
      res.status(200)
      res.send(data.data)
      // const validator = this.validator(VALIDATOR_TYPES.WFSController.getWFSFeatures)
      // const input = await validator.validate(req.body)
    } catch(err) {
      res.send(err)
    }
  }

 
}
