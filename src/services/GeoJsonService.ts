import { injectable } from 'inversify'
import geojsonvalidate from 'geojson-validation'
export interface IGeoJsonService {
  validate(json: any): boolean
}
@injectable()
export class GeoJsonService implements IGeoJsonService {
  constructor() {}
  
  public validate(json: any): boolean {
    console.log('GeoJsonService@validate', json)
    return geojsonvalidate.valid(json)
  }
}
