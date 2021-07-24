import { inject, injectable } from 'tsyringe'
import { ILocationDTO } from '../DTOs/ILocationDTO'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class DeleteLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute({
    id,
    client_id,
  }: Partial<ILocationDTO>): Promise<Location> {
    if (!id || !client_id) {
      throw new Error('No params ID to customer in request')
    }

    const location = await this.locationRepository.delete({ id, client_id })

    if (!location) {
      throw new Error('Unable to delete the customer')
    }

    return location
  }
}
