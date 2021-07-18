import { inject, injectable } from 'tsyringe'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class FindLocationService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute(id: number): Promise<Location> {
    const location = await this.locationRepository.findById(id)

    if (!location) {
      throw new Error('Unable to find the customer')
    }

    return location
  }
}
