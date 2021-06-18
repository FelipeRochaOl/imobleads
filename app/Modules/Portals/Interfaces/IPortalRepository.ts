import { IPortalDTO } from '../DTOs/IPortalDTO'
import Portal from '../Models/Portal'

export interface IPortalRepository {
  findAll(): Promise<Portal[]>
  create(data: IPortalDTO): Promise<Portal>
  findById(id: number): Promise<Portal | null>
  update(data: Partial<IPortalDTO>): Promise<Portal | undefined>
  delete(id: number): Promise<Portal | null>
}
