import { IValidationType } from '@Interface/validator/IValidatorType';
import { IWFSFeatureInput } from '@Interface/WFS/IWFSFeatureInput';

export const VALIDATOR_TYPES = {
  WFSController: {
    getWFSFeatures: {} as IValidationType<IWFSFeatureInput>
  }
}