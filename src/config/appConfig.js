export class AppConfig {
  constructor(logger) {
    this.logger = logger
  }

  getCelanturURL = () => (this.logger.celantur.url)
  getCelanturCredential = () => JSON.stringify({
    username: this.logger.celantur.username,
    password: this.logger.celantur.password,
  })

}