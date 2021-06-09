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

    const tokenJson = await auth.use('api').attempt(email, password, {
      expiresIn: '1days',
    })

    return response.ok(tokenJson)
  }

  public async update({ auth, request, response }: HttpContextContract) {
    let responseError: IResponseError = { message: 'User not found in database', success: false }
    const id = request.input('id')
    const user = await User.find(id)

    if (!user) {
      return response.unauthorized(responseError)
    }

    if (auth.use('api').isLoggedOut) {
      const token = await auth.use('api').generate(user)
      return response.ok(token)
    }

    return response.ok({ token: auth.use('api').token })
  }

  public async delete({ auth, response }) {
    await auth.use('api').revoke()
    return response.ok({ message: { revoked: true }, success: true })
  }
}
