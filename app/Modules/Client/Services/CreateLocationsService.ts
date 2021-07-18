import { inject, injectable } from 'tsyringe'

import { ILocationDTO } from '../DTOs/ILocationDTO'
import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class CreateLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute(data: ILocationDTO): Promise<Location> {
    const location = await this.locationRepository.create(data)

    if (!location) {
      throw new Error('Unable to register the user')
    }

    return location
  }
}
