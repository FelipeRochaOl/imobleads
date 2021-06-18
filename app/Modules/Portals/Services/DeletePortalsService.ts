import { inject, injectable } from 'tsyringe'

import { IPortalRepository } from '../Interfaces/IPortalRepository'

import Portal from '../Models/Portal'

@injectable()
export default class DeletePortalsService {
  constructor(
    @inject('PortalRepository')
    private portalRepository: IPortalRepository
  ) {}

  public async execute(id: number): Promise<Portal> {
    const portal = await this.portalRepository.delete(id)

    if (!portal) {
      throw new Error('Unable to delete the customer')
    }

    return portal
  }
}
