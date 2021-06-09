import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../Models/User'

export default class UserController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all()
    return response.ok(user)
  }

  public async create({ request, response }: HttpContextContract) {
    const { email, password } = request.body()
    await User.create({
      email,
      password,
    })

    return response.redirect().toRoute('user.index')
  }

  public async show({ request, response }: HttpContextContract) {
    const qs = request.qs()
    const id = request.param('id')

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
    await user.merge({ ...data }).save()
    response.redirect().toRoute('user.show', [id])
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const user = await User.findOrFail(id)
    await user.delete()
    response.json({ success: user.$isDeleted })
  }
}
