import { inject, injectable } from 'tsyringe'

import { IImmobileRepository } from '../Interfaces/IImmobileRepository'

import Immobile from '../Models/Immobile'

@injectable()
export default class ListAllImmobilesService {
  constructor(
    @inject('ImmobileRepository')
    private portalRepository: IImmobileRepository
  ) {}

  public async execute(): Promise<Immobile[]> {
    const portals = await this.portalRepository.findAll()

    if (!portals) {
      throw new Error('No customers were found')
    }

    return portals
  }
}
