import { inject, injectable } from 'tsyringe'
import { ILocationDTO } from '../DTOs/ILocationDTO'

import { ILocationRepository } from '../Interfaces/ILocationRepository'

import Location from '../Models/Location'

@injectable()
export default class FindLocationService {
  constructor(
    @inject('LocationRepository')
    private locationRepository: ILocationRepository
  ) {}

  public async execute({
    client_id,
    id,
  }: Partial<ILocationDTO>): Promise<Location[]> {
    if (!client_id || !id) {
      throw new Error('No params ID to customer in request')
    }

    const location = await this.locationRepository.findById({
      client_id,
      id,
    })

    if (!location) {
      throw new Error('Unable to find the customer')
    }

    return location
  }
}
