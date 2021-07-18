import { ILocationDTO } from '../DTOs/ILocationDTO'
import { ILocationRepository } from '../Interfaces/ILocationRepository'
import Location from '../Models/Location'

export default class LocationRepository implements ILocationRepository {
  public async findAll(): Promise<Location[]> {
    return await Location.all()
  }

  public async create(data: ILocationDTO): Promise<Location> {
    return await Location.create(data)
  }

  public async findById(id: number): Promise<Location | null> {
    return await Location.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<ILocationDTO>): Promise<Location | undefined> {
    const contact = await Location.findBy('id', id)
    return await contact?.merge(data).save()
  }

  public async delete(id: number): Promise<Location | null> {
    const contact = await Location.findBy('id', id)
    contact?.softDelete()
    return contact
  }
}
