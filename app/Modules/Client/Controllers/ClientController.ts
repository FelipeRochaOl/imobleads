import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IClientDTO } from '../DTOs/IClientDTO'

import ListAllClientsService from '../Services/ListAllClientsService'
import CreateClientsService from '../Services/CreateClientsService'
import FindClientService from '../Services/FindClientService'
import UpdateClientsService from '../Services/UpdateClientsService'
import DeleteClientsService from '../Services/DeleteClientsService'

export default class ClientController {
  public async index({ response }: HttpContextContract) {
    const listClientService = container.resolve(ListAllClientsService)
    const client = await listClientService.execute()

    return response.standart({
      message: 'No customers found',
      success: true,
      data: client,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const data: Record<'client', IClientDTO> = request.body()

    const createClientService = container.resolve(CreateClientsService)
    const client = await createClientService.execute(data.client)

    return response.standart({
      message: 'Customer saved successfully',
      success: true,
      data: client,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: Record<'client', number> = request.params()

    const findClientService = container.resolve(FindClientService)
    const client = await findClientService.execute(id.client)

    return response.standart({
      message: 'Customer found successfully',
      success: true,
      data: client,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const data: Record<'client', Partial<IClientDTO>> = request.body()

    const updateClientService = container.resolve(UpdateClientsService)
    const client = await updateClientService.execute(data.client)

    return response.standart({
      message: 'Customer updated successfully',
      success: true,
      data: client,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: Record<'client', number> = request.params()

    const deleteClientService = container.resolve(DeleteClientsService)
    const client = await deleteClientService.execute(id.client)

    return response.standart({
      message: 'Customer deleted successful',
      success: true,
      data: client,
    })
  }
}
