import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Modules/User/Models/User'
import { IGenerateTokenData } from '../Interfaces/IGenerateTokenData'

export default class GenerateTokenService {
  public async execute({
    auth,
    user,
    password,
  }: IGenerateTokenData): Promise<OpaqueTokenContract<User>> {
    const compareHash = await Hash.verify(user.password, password)

    if (!compareHash) {
      throw new Error('')
    }

    const tokenJson = await auth.use('api').attempt(user.email, password, {
      expiresIn: '1days',
    })

    return tokenJson
  }
}
