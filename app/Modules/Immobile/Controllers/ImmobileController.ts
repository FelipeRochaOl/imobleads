import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IImmobileDTO } from '../DTOs/IImmobileDTO'

import ListAllPropertiesService from '../Services/ListAllPropertiesService'
import CreatePropertiesService from '../Services/CreatePropertiesService'
import FindImmobileService from '../Services/FindImmobileService'
import UpdatePropertiesService from '../Services/UpdatePropertiesService'
import DeletePropertiesService from '../Services/DeletePropertiesService'

export default class ImmobileController {
  public async index({ response }: HttpContextContract) {
    const listImmobileService = container.resolve(ListAllPropertiesService)
    const immobile = await listImmobileService.execute()

    return response.standart({
      message: 'No portals found',
      success: true,
      data: immobile,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const data: Record<'immobile', IImmobileDTO> = request.body()

    const createImmobileService = container.resolve(CreatePropertiesService)
    const immobile = await createImmobileService.execute(data.immobile)

    return response.standart({
      message: 'Immobile saved successfully',
      success: true,
      data: immobile,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: Record<'immobile', number> = request.params()

    const findImmobileService = container.resolve(FindImmobileService)
    const immobile = await findImmobileService.execute(id.immobile)

    return response.standart({
      message: 'Immobile found successfully',
      success: true,
      data: immobile,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const data: Record<'immobile', Partial<IImmobileDTO>> = request.body()

    const updateImmobileService = container.resolve(UpdatePropertiesService)
    const immobile = await updateImmobileService.execute(data.immobile)

    return response.standart({
      message: 'Immobile updated successfully',
      success: true,
      data: immobile,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: Record<'immobile', number> = request.params()

    const deleteImmobileService = container.resolve(DeletePropertiesService)
    const immobile = await deleteImmobileService.execute(id.immobile)

    return response.standart({
      message: 'Immobile deleted successful',
      success: true,
      data: immobile,
    })
  }
}
