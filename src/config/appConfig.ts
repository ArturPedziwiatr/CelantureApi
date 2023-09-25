import { IAppConfig } from '@Interface/config/IAppConfig'
import { ICelanturConfig, IConfig } from '@Interface/config/IConfig'
import { injectable } from 'inversify'

@injectable()
export class AppConfig implements IAppConfig {
  private celantur: ICelanturConfig

  constructor(config: IConfig) {
    this.celantur = config.celantur
  }

  public getCelanturURL(): string {
    return this.celantur.url
  }

  public getCelanturCredential(): string {
    return JSON.stringify({
      username: this.celantur.username,
      password: this.celantur.password,
    })
  }
}
