import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { IClientDTO } from '../DTOs/IClientDTO'

export interface IClientUpdateData {
  auth: AuthContract
  data: Partial<IClientDTO>
}
