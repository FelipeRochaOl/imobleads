import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async index({}: HttpContextContract) {}

  public async create({ auth, request, response }: HttpContextContract) {
    console.log(auth, request, response)

    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)
    return response.ok(token)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
