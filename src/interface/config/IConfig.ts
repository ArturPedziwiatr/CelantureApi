export interface IConfig {
  readonly mapBox: IMapBoxConfig
  readonly cesium: IMapBoxConfig
  readonly graph: IGraphConfig
  readonly celantur: ICelanturConfig
  readonly google: IGoogleConfig
}

export interface IMapBoxConfig {
  readonly token: string
}

export interface IGraphConfig {
  readonly token: string
  readonly url: string
}

export interface ICelanturConfig {
  readonly username: string
  readonly password: string
  readonly url: string
}

export interface IGoogleConfig {
  readonly apiKey: string
}