import { MapTypes } from '@/MapTypes'
import { VALIDATOR_TYPES } from '@/enums/ValidatorTypes'
import { IValidationType } from '@Interface/validator/IValidatorType'
import { Request, Response } from 'express-serve-static-core'
import { inject, injectable } from 'inversify'
import { IWFSController } from '@Interface/WFS/IWFSController'
import { IWFSService } from '@Interface/WFS/IWFSService'

@injectable()
export class WFSController implements IWFSController {
  constructor(
    @inject(MapTypes.Valiadtors) protected validator:<T>(validationType: IValidationType<T>) => { validate(obj: unknown): Promise<T> },
    @inject(MapTypes.Services.WFSService) protected wfsService: IWFSService,
  ) {}

  async getFeaturesList(req: Request, res: Response): Promise<void> {
    try {
      const validator = this.validator(VALIDATOR_TYPES.WFSController.getWFSFeatures)
      const input = await validator.validate(req.body)
      const result = await this.wfsService.getFeaturesList(input)
      res.status(200).send(JSON.stringify(result))
    } catch(err) {
      res.send(err)
    }
  }

 
}
