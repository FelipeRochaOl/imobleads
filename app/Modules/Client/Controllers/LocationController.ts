import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { ILocationDTO } from '../DTOs/ILocationDTO'

import ListAllLocationsService from '../Services/ListAllLocationsService'
import CreateLocationsService from '../Services/CreateLocationsService'
import FindLocationService from '../Services/FindLocationService'
import UpdateLocationsService from '../Services/UpdateLocationsService'
import DeleteLocationsService from '../Services/DeleteLocationsService'

export default class LocationController {
  public async index({ response, request }: HttpContextContract) {
    const client_id: number | undefined = request.param('client_id')
    const listLocationService = container.resolve(ListAllLocationsService)
    const location = await listLocationService.execute(client_id)

    return response.standart({
      message: 'No locations found',
      success: true,
      data: location,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const client_id: number | undefined = request.param('client_id')
    const locationData = request.body()
    const data = locationData as ILocationDTO

    const createLocationService = container.resolve(CreateLocationsService)
    const location = await createLocationService.execute({ client_id, ...data })

    return response.standart({
      message: 'Location saved successfully',
      success: true,
      data: location,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')

    const findLocationService = container.resolve(FindLocationService)
    const [location] = await findLocationService.execute({ id, client_id })

    return response.standart({
      message: 'Location found successfully',
      success: true,
      data: location,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')
    const locationData = request.body()
    const data = locationData as Partial<ILocationDTO>

    const updateLocationService = container.resolve(UpdateLocationsService)
    const location = await updateLocationService.execute({
      id,
      client_id,
      ...data,
    })

    return response.standart({
      message: 'Location updated successfully',
      success: true,
      data: location,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number | undefined = request.param('id')
    const client_id: number | undefined = request.param('client_id')

    const deleteLocationService = container.resolve(DeleteLocationsService)
    const location = await deleteLocationService.execute({ id, client_id })

    return response.standart({
      message: 'Location deleted successful',
      success: true,
      data: location,
    })
  }
}
