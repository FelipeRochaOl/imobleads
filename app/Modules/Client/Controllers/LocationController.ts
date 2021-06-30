import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { ILocationDTO } from '../DTOs/ILocationDTO'

import ListAllLocationsService from '../Services/ListAllLocationsService'
import CreateLocationsService from '../Services/CreateLocationsService'
import FindLocationService from '../Services/FindLocationService'
import UpdateLocationsService from '../Services/UpdateLocationsService'
import DeleteLocationsService from '../Services/DeleteLocationsService'

export default class LocationController {
  public async index({ response }: HttpContextContract) {
    const listLocationService = container.resolve(ListAllLocationsService)
    const location = await listLocationService.execute()

    return response.standart({
      message: 'No locations found',
      success: true,
      data: location,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const data: Record<'location', ILocationDTO> = request.body()

    const createLocationService = container.resolve(CreateLocationsService)
    const location = await createLocationService.execute(data.location)

    return response.standart({
      message: 'Location saved successfully',
      success: true,
      data: location,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: Record<'location', number> = request.params()

    const findLocationService = container.resolve(FindLocationService)
    const location = await findLocationService.execute(id.location)

    return response.standart({
      message: 'Location found successfully',
      success: true,
      data: location,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const data: Record<'location', Partial<ILocationDTO>> = request.body()

    const updateLocationService = container.resolve(UpdateLocationsService)
    const location = await updateLocationService.execute(data.location)

    return response.standart({
      message: 'Location updated successfully',
      success: true,
      data: location,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: Record<'location', number> = request.params()

    const deleteLocationService = container.resolve(DeleteLocationsService)
    const location = await deleteLocationService.execute(id.location)

    return response.standart({
      message: 'Location deleted successful',
      success: true,
      data: location,
    })
  }
}
