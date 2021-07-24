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

  public async execute({
    client_id,
    ...data
  }: ILocationDTO): Promise<Location> {
    if (!client_id) {
      throw new Error('No params ID to customer in request')
    }

    const location = await this.locationRepository.create({
      client_id,
      ...data,
    })

    if (!location) {
      throw new Error('Unable to register the user')
    }

    return location
  }
}
