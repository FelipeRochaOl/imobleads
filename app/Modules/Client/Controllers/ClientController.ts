import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IClientDTO } from '../DTOs/IClientDTO'

import ListAllClientsService from '../Services/ListAllClientsService'
import CreateClientsService from '../Services/CreateClientsService'
import FindClientService from '../Services/FindClientService'
import UpdateClientsService from '../Services/UpdateClientsService'
import DeleteClientsService from '../Services/DeleteClientsService'

export default class ClientController {
  public async index({ auth, response }: HttpContextContract) {
    const listClientService = container.resolve(ListAllClientsService)
    const client = await listClientService.execute(auth)

    return response.standart({
      message: 'Customers list',
      success: true,
      data: client,
    })
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const belongs_to_the_client_id = auth.user?.client?.id ?? undefined
    const data: Partial<IClientDTO> = request.body()

    const createClientService = container.resolve(CreateClientsService)
    const client = await createClientService.execute({
      belongs_to_the_client_id,
      ...data,
    })

    return response.standart({
      message: 'Customer saved successfully',
      success: true,
      data: client,
    })
  }

  public async show({ auth, request, response }: HttpContextContract) {
    const id = request.param('id', undefined)
    const findClientService = container.resolve(FindClientService)
    const client = await findClientService.execute({ auth, client_id: id })

    return response.standart({
      message: 'Customer found successfully',
      success: true,
      data: client,
    })
  }

  public async update({ auth, request, response }: HttpContextContract) {
    const id = request.param('id', undefined)
    let data: Partial<IClientDTO> = request.body()
    data.id = id

    const updateClientService = container.resolve(UpdateClientsService)
    const client = await updateClientService.execute({ auth, data })

    return response.standart({
      message: 'Customer updated successfully',
      success: true,
      data: client,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id', undefined)

    const deleteClientService = container.resolve(DeleteClientsService)
    const client = await deleteClientService.execute(id)

    return response.standart({
      message: 'Customer deleted successful',
      success: true,
      data: client,
    })
  }
}
