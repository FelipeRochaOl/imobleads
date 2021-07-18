import { inject, injectable } from 'tsyringe'

import { IPortalDTO } from '../DTOs/IPortalDTO'
import { IPortalRepository } from '../Interfaces/IPortalRepository'

import Portal from '../Models/Portal'

@injectable()
export default class CreatePortalsService {
  constructor(
    @inject('PortalRepository')
    private portalRepository: IPortalRepository
  ) {}

  public async execute(data: IPortalDTO): Promise<Portal> {
    const portal = await this.portalRepository.create(data)

    if (!portal) {
      throw new Error('Unable to register the portal')
    }

    return portal
  }
}
