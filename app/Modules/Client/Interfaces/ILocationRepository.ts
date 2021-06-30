import { ILocationDTO } from '../DTOs/ILocationDTO'
import Location from '../Models/Location'

export interface ILocationRepository {
  findAll(): Promise<Location[]>
  create(data: ILocationDTO): Promise<Location>
  findById(id: number): Promise<Location | null>
  update(data: Partial<ILocationDTO>): Promise<Location | undefined>
  delete(id: number): Promise<Location | null>
}
