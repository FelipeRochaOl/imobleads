import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { container } from 'tsyringe'

import FindAllUsersServices from '../Services/FindAllUsersService'
import CreateUsersService from '../Services/CreateUsersService'
import FindUserService from '../Services/FindUserService'
import UpdateUsersService from '../Services/UpdateUsersService'
import DeleteUsersService from '../Services/DeleteUsersService'

export default class UserController {
  public async index({ response }: HttpContextContract) {
    const findAllUsersServices = container.resolve(FindAllUsersServices)
    const users = await findAllUsersServices.execute()

    return response.ok({
      message: 'User list found successfully',
      success: true,
      data: users,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const { email, password, role } = request.body()

    const createUserService = container.resolve(CreateUsersService)
    const user = await createUserService.execute({ email, password, role })

    return response.ok({
      message: 'User created successfully',
      success: true,
      data: user,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const { email } = request.qs()
    const id = request.param('id')

    const findUserService = container.resolve(FindUserService)
    const user = await findUserService.execute({ id, email })

    return response.ok({
      message: 'User found successfully',
      success: true,
      data: user,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = request.body()

    const updateUserService = container.resolve(UpdateUsersService)
    const user = await updateUserService.execute({ id, ...data })

    return response.ok({
      message: 'User updated successfully',
      success: true,
      data: user,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const deleteUserService = container.resolve(DeleteUsersService)
    const user = await deleteUserService.execute(id)

    return response.json({
      message: 'User deleted successfully',
      success: true,
      data: user,
    })
  }
}
