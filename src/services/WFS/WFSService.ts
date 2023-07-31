import { IWFSFeatureInput } from '@Interface/WFS/IWFSFeatureInput';
import { IWFSService } from '@Interface/WFS/IWFSService';
import { injectable } from 'inversify';

@injectable()
export class WFSService implements IWFSService {
  constructor(
  ) {}

  async getWFSFeatures(input: IWFSFeatureInput) {}
}
