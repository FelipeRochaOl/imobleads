import { inject, injectable } from 'tsyringe'

import { IPortalRepository } from '../Interfaces/IPortalRepository'

import Portal from '../Models/Portal'

@injectable()
export default class FindPortalService {
  constructor(
    @inject('PortalRepository')
    private portalRepository: IPortalRepository
  ) {}

  public async execute(id: number): Promise<Portal> {
    const portal = await this.portalRepository.findById(id)

    if (!portal) {
      throw new Error('Unable to find the portal')
    }

    return portal
  }
}
