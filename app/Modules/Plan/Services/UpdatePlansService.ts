import { inject, injectable } from 'tsyringe'

import { IPlanDTO } from '../DTOs/IPlanDTO'
import { IPlanRepository } from '../Interfaces/IPlanRepository'

import Plan from '../Models/Plan'

@injectable()
export default class UpdatePlansService {
  constructor(
    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) {}

  public async execute(data: Partial<IPlanDTO>): Promise<Plan> {
    const plan = await this.planRepository.update(data)

    if (!plan) {
      throw new Error('Unable to update the plan')
    }

    return plan
  }
}
