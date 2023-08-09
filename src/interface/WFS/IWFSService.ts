import { IWFSFeatureInput } from "./IWFSFeatureInput";

export interface IWFSService {
  getWFSFeatures(input: IWFSFeatureInput)
}