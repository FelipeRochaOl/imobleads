import { inject, injectable } from 'tsyringe'

import { ILocationDTO } from '../DTOs/ILocationDTO'
import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class UpdateLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute({
    client_id,
    id,
    ...data
  }: Partial<ILocationDTO>): Promise<Location> {
    if (!client_id || !id) {
      throw new Error('No params ID to customer in request')
    }

    const location = await this.locationRepository.update({
      client_id,
      id,
      ...data,
    })

    if (!location) {
      throw new Error('Unable to update the location')
    }

    return location
  }
}
