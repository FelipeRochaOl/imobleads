import {
  ILocationDeleteDTO,
  ILocationDTO,
  ILocationUpdateDTO,
} from '../DTOs/ILocationDTO'
import {
  IFindClient,
  ILocationRepository,
} from '../Interfaces/ILocationRepository'
import Location from '../Models/Location'

export default class LocationRepository implements ILocationRepository {
  public async findAll(client_id: number): Promise<Location[]> {
    return await Location.query().where('client_id', client_id)
  }

  public async create(data: ILocationDTO): Promise<Location> {
    return await Location.create(data)
  }

  public async findById({
    client_id,
    id,
  }: IFindClient): Promise<Location[] | null> {
    return await Location.query().where('id', id).where('client_id', client_id)
  }

  public async update({
    id,
    client_id,
    ...data
  }: ILocationUpdateDTO): Promise<Location | undefined> {
    const [location] = await Location.query()
      .where('id', id)
      .where('client_id', client_id)
    return await location?.merge(data).save()
  }

  public async delete({
    client_id,
    id,
  }: ILocationDeleteDTO): Promise<Location | null> {
    const [location] = await Location.query()
      .where('id', id)
      .where('client_id', client_id)
    location?.softDelete()
    return location
  }
}
