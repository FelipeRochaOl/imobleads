import { IImmobileDTO } from '../DTOs/IImmobileDTO'
import Immobile from '../Models/Immobile'

export interface IImmobileRepository {
  findAll(): Promise<Immobile[]>
  create(data: IImmobileDTO): Promise<Immobile>
  findById(id: number): Promise<Immobile | null>
  update(data: Partial<IImmobileDTO>): Promise<Immobile | undefined>
  delete(id: number): Promise<Immobile | null>
}
