import { WfsFeatureTypeBrief } from '@camptocamp/ogc-client';
import { IWFSFeatureInput } from '@Interface/WFS/IWFSFeatureInput';

export interface IWFSService {
  getFeaturesList(input: IWFSFeatureInput): Promise<WfsFeatureTypeBrief[]> 
}