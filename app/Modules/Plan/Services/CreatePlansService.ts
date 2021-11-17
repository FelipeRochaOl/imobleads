import { inject, injectable } from 'tsyringe'

import { IPlanDTO } from '../DTOs/IPlanDTO'
import { IPlanRepository } from '../Interfaces/IPlanRepository'

import Plan from '../Models/Plan'

@injectable()
export default class CreatePlansService {
  constructor(
    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) {}

  public async execute(data: IPlanDTO): Promise<Plan> {
    const plan = await this.planRepository.create(data)

    if (!plan) {
      throw new Error('Unable to register the plan')
    }

    return plan
  }
}
