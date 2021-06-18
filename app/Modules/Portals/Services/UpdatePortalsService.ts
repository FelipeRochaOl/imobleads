import { inject, injectable } from 'tsyringe'

import { IPortalDTO } from '../DTOs/IPortalDTO'
import { IPortalRepository } from '../Interfaces/IPortalRepository'

import Portal from '../Models/Portal'

@injectable()
export default class UpdatePortalsService {
  constructor(
    @inject('PortalRepository')
    private portalRepository: IPortalRepository
  ) {}

  public async execute(data: Partial<IPortalDTO>): Promise<Portal> {
    const portal = await this.portalRepository.update(data)

    if (!portal) {
      throw new Error('Unable to update the portal')
    }

    return portal
  }
}
