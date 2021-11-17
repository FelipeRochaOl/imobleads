import { IPlanDTO } from '../DTOs/IPlanDTO'
import { IPlanRepository } from '../Interfaces/IPlanRepository'
import Plan from '../Models/Plan'

export default class PlanRepository implements IPlanRepository {
  public async findAll(): Promise<Plan[]> {
    return await Plan.all()
  }

  public async create(data: Partial<IPlanDTO>): Promise<Plan> {
    return await Plan.create(data)
  }

  public async findById(id: number): Promise<Plan | null> {
    return await Plan.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<IPlanDTO>): Promise<Plan | undefined> {
    const plan = await Plan.findBy('id', id)
    return await plan?.merge(data).save()
  }

  public async delete(id: number): Promise<Plan | null> {
    const plan = await Plan.findBy('id', id)
    plan?.softDelete()
    return plan
  }
}
