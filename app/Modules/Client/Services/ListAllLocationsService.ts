import { inject, injectable } from 'tsyringe'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class ListAllLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute(): Promise<Location[]> {
    const locations = await this.locationRepository.findAll()

    if (!locations) {
      throw new Error('No customers were found')
    }

    return locations
  }
}
