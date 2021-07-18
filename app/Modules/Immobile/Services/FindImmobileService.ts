import { inject, injectable } from 'tsyringe'

import { IImmobileRepository } from '../Interfaces/IImmobileRepository'

import Immobile from '../Models/Immobile'

@injectable()
export default class FindImmobileService {
  constructor(
    @inject('ImmobileRepository')
    private portalRepository: IImmobileRepository
  ) {}

  public async execute(id: number): Promise<Immobile> {
    const immobile = await this.portalRepository.findById(id)

    if (!immobile) {
      throw new Error('Unable to find the customer')
    }

    return immobile
  }
}
