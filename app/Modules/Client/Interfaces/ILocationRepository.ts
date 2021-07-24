import { ILocationDeleteDTO, ILocationDTO } from '../DTOs/ILocationDTO'
import Location from '../Models/Location'

export interface IFindClient {
  id: number
  client_id: number
}

export interface ILocationRepository {
  findAll(client_id: number): Promise<Location[]>
  create(data: ILocationDTO): Promise<Location>
  findById(data: IFindClient): Promise<Location[] | null>
  update(data: Partial<ILocationDTO>): Promise<Location | undefined>
  delete(data: ILocationDeleteDTO): Promise<Location | null>
}
