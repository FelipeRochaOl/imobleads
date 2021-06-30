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

  public async execute(data: Partial<ILocationDTO>): Promise<Location> {
    const location = await this.locationRepository.update(data)

    if (!location) {
      throw new Error('Unable to update the location')
    }

    return location
  }
}
