import { container } from 'tsyringe'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { IPlanDTO } from '../DTOs/IPlanDTO'

import ListAllPlansService from '../Services/ListAllPlansService'
import CreatePlansService from '../Services/CreatePlansService'
import FindPlanService from '../Services/FindPlansService'
import UpdatePlansService from '../Services/UpdatePlansService'
import DeletePlansService from '../Services/DeletePlansService'

export default class PlanController {
  public async index({ response }: HttpContextContract) {
    const listPlanService = container.resolve(ListAllPlansService)
    const plan = await listPlanService.execute()

    return response.standart({
      message: 'No plans found',
      success: true,
      data: plan,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const planData = request.body()
    let data = planData as IPlanDTO

    const createPlanService = container.resolve(CreatePlansService)
    const plan = await createPlanService.execute(data)

    return response.standart({
      message: 'Plan saved successfully',
      success: true,
      data: plan,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id', undefined)

    const findPlanService = container.resolve(FindPlanService)
    const plan = await findPlanService.execute(id)

    return response.standart({
      message: 'Plan found successfully',
      success: true,
      data: plan,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const planData = request.body()
    let data = planData as IPlanDTO

    const updatePlanService = container.resolve(UpdatePlansService)
    const plan = await updatePlanService.execute(data)

    return response.standart({
      message: 'Plan updated successfully',
      success: true,
      data: plan,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id', undefined)

    const deletePlanService = container.resolve(DeletePlansService)
    const plan = await deletePlanService.execute(id.plan)

    return response.standart({
      message: 'Plan deleted successful',
      success: true,
      data: plan,
    })
  }
}
