import { inject, injectable } from 'tsyringe'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class DeleteLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute(id: number): Promise<Location> {
    const location = await this.locationRepository.delete(id)

    if (!location) {
      throw new Error('Unable to delete the customer')
    }

    return location
  }
}
