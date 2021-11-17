import { inject, injectable } from 'tsyringe'

import { IImmobileDTO } from '../DTOs/IImmobileDTO'
import { IImmobileRepository } from '../Interfaces/IImmobileRepository'

import Immobile from '../Models/Immobile'

@injectable()
export default class CreatePropertiesService {
  constructor(
    @inject('ImmobileRepository')
    private portalRepository: IImmobileRepository
  ) {}

  public async execute(data: IImmobileDTO): Promise<Immobile> {
    const portal = await this.portalRepository.create(data)

    if (!portal) {
      throw new Error('Unable to register the immobile')
    }

    return portal
  }
}
