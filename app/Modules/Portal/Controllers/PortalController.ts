import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IPortalDTO } from '../DTOs/IPortalDTO'

import ListAllPortalsService from '../Services/ListAllPortalsService'
import CreatePortalsService from '../Services/CreatePortalsService'
import FindPortalService from '../Services/FindPortalService'
import UpdatePortalsService from '../Services/UpdatePortalsService'
import DeletePortalsService from '../Services/DeletePortalsService'

export default class PortalController {
  public async index({ response }: HttpContextContract) {
    const listPortalService = container.resolve(ListAllPortalsService)
    const portal = await listPortalService.execute()

    return response.standart({
      message: 'No portals found',
      success: true,
      data: portal,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const data: Record<'portal', IPortalDTO> = request.body()

    const createPortalService = container.resolve(CreatePortalsService)
    const portal = await createPortalService.execute(data.portal)

    return response.standart({
      message: 'Portal saved successfully',
      success: true,
      data: portal,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id: Record<'portal', number> = request.params()

    const findPortalService = container.resolve(FindPortalService)
    const portal = await findPortalService.execute(id.portal)

    return response.standart({
      message: 'Portal found successfully',
      success: true,
      data: portal,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const data: Record<'portal', Partial<IPortalDTO>> = request.body()

    const updatePortalService = container.resolve(UpdatePortalsService)
    const portal = await updatePortalService.execute(data.portal)

    return response.standart({
      message: 'Portal updated successfully',
      success: true,
      data: portal,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: Record<'portal', number> = request.params()

    const deletePortalService = container.resolve(DeletePortalsService)
    const portal = await deletePortalService.execute(id.portal)

    return response.standart({
      message: 'Portal deleted successful',
      success: true,
      data: portal,
    })
  }
}
