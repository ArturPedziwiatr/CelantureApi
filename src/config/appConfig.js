export class AppConfig {
  constructor(logger) {
    this.token = {
      mapbox: logger.token.mapbox,
      cesium: logger.token.cesium,
    }
    this.graph = {
      mapbox: logger.graph.token,
      cesium: logger.graph.url,
    }
  }
}