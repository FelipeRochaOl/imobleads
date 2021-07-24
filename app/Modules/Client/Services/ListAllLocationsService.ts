import { inject, injectable } from 'tsyringe'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class ListAllLocationsService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute(client_id: number | undefined): Promise<Location[]> {
    if (!client_id) {
      throw new Error('No params ID to customer in request')
    }

    const locations = await this.locationRepository.findAll(client_id)

    if (!locations) {
      throw new Error('No customers were found')
    }

    return locations
  }
}
