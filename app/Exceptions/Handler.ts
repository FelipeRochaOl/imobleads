import Logger from '@ioc:Adonis/Core/Logger'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { IResponseError } from 'App/Shared/Interfaces/IResponseError'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    const errorMessage: IResponseError = {
      message: 'Error processing your request',
      success: false,
    }

    await super.handle(error, ctx)

    return ctx.response.status(404).json(errorMessage)
  }
}
