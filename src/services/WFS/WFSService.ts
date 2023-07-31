import { IWFSFeatureInput } from '@Interface/WFS/IWFSFeatureInput';
import { IWFSService } from '@Interface/WFS/IWFSService';
import { WfsFeatureTypeBrief, WfsEndpoint } from '@camptocamp/ogc-client';
import buildUrl from 'build-url-ts';
import { injectable } from 'inversify';

@injectable()
export class WFSService implements IWFSService {
  constructor(
  ) {}

  async getFeaturesList(input: IWFSFeatureInput): Promise<WfsFeatureTypeBrief[]> {
    const url = buildUrl(input.redirectUri, {
      queryParams: {
        service: 'wfs',
        request: 'getcapabilities'
      }
    })
    return (await new WfsEndpoint(url).isReady()).getFeatureTypes()
  }
}
