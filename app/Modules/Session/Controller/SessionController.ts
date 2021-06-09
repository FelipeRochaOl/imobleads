import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Modules/User/Models/User'
import { IResponseError } from 'App/Shared/Interfaces/IResponseError'

export default class SessionsController {
  public async store({ auth, request, response }: HttpContextContract) {
    let responseError: IResponseError = { message: 'Invalid credentials', success: false }
    const { email, password } = request.body()
    const user = await User.findBy('email', email)

    if (!user) {
      return response.unauthorized(responseError)
    }

    const compareHash = await Hash.verify(user.password, password)
    if (!compareHash) {
      return response.unauthorized(responseError)
    }

    const token = await auth.use('api').attempt(email, password)
    return response.ok(token)
  }
}
