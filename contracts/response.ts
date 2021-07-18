/* eslint-disable @typescript-eslint/naming-convention */
import { IResponse } from 'App/Shared/Interfaces/IResponse'
import { IResponseError } from 'App/Shared/Interfaces/IResponseError'

declare module '@ioc:Adonis/Core/Response' {
  interface ResponseContract {
    standart(messages: IResponse): void
    errorMessage(messages: IResponseError): void
  }
}
