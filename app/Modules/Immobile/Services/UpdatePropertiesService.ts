import { inject, injectable } from 'tsyringe'

import { IImmobileDTO } from '../DTOs/IImmobileDTO'
import { IImmobileRepository } from '../Interfaces/IImmobileRepository'

import Immobile from '../Models/Immobile'

@injectable()
export default class UpdateImmobilesService {
  constructor(
    @inject('ImmobileRepository')
    private portalRepository: IImmobileRepository
  ) {}

  public async execute(data: Partial<IImmobileDTO>): Promise<Immobile> {
    const immobile = await this.portalRepository.update(data)

    if (!immobile) {
      throw new Error('Unable to update the immobile')
    }

    return immobile
  }
}
