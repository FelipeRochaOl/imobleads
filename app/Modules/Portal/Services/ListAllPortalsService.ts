import { inject, injectable } from 'tsyringe'

import { IPortalRepository } from '../Interfaces/IPortalRepository'

import Portal from '../Models/Portal'

@injectable()
export default class ListAllPortalsService {
  constructor(
    @inject('PortalRepository')
    private portalRepository: IPortalRepository
  ) {}

  public async execute(): Promise<Portal[]> {
    const portals = await this.portalRepository.findAll()

    if (!portals) {
      throw new Error('No portals were found')
    }

    return portals
  }
}
