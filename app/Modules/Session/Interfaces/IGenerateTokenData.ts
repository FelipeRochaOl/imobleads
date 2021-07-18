import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import User from 'App/Modules/User/Models/User'

export interface IGenerateTokenData {
  auth: AuthContract
  user: User
  password: string
}
