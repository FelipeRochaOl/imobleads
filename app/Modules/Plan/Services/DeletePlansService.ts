import { inject, injectable } from 'tsyringe'

import { IPlanRepository } from '../Interfaces/IPlanRepository'

import Plan from '../Models/Plan'

@injectable()
export default class DeletePlansService {
  constructor(
    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) {}

  public async execute(id: number): Promise<Plan> {
    const plan = await this.planRepository.delete(id)

    if (!plan) {
      throw new Error('Unable to delete the plan')
    }

    return plan
  }
}
