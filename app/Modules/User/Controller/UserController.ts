import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Modules/User/Models/User'

export default class UserController {
  public async index({ response }: HttpContextContract) {
    // auth.user?.$original.id
    const user = await User.all()
    return response.ok(user)
  }

  public async store({ request, response }: HttpContextContract) {
    const { email, password, role } = request.body()
    const newUser = await User.create({
      email,
      password,
      role,
    })

    return response.ok(newUser)
  }

  public async show({ auth, request, response }: HttpContextContract) {
    const qs = request.qs()
    const id = request.param('id') || auth.user?.$original.id

    var user = id ? await User.find(id) : undefined

    if (user) {
      return response.ok(user)
    }

    var user = qs ? await User.findBy('email', qs.email) : undefined
    return response.ok(user)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = request.body()
    const user = await User.findOrFail(id)
    await user.merge(data).save()
    return response.ok(user)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const user = await User.findOrFail(id)
    await user.delete()
    response.json({ success: user.$isDeleted })
  }
}
