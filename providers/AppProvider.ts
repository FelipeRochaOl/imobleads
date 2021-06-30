import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { IResponse } from 'App/Shared/Interfaces/IResponse'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const Response = this.app.container.use('Adonis/Core/Response')

    Response.macro('standart', function (messages: IResponse) {
      return messages
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
