import { AuthContract } from '@ioc:Adonis/Addons/Auth'

export interface IClientFindData {
  auth: AuthContract
  client_id: number | undefined
}
