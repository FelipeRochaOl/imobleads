import { inject, injectable } from 'tsyringe'

import { IPlanRepository } from '../Interfaces/IPlanRepository'

import Plan from '../Models/Plan'

@injectable()
export default class ListAllPlansService {
  constructor(
    @inject('PlanRepository')
    private planRepository: IPlanRepository
  ) {}

  public async execute(): Promise<Plan[]> {
    const plans = await this.planRepository.findAll()

    if (!plans) {
      throw new Error('No plans were found')
    }

    return plans
  }
}
