import { IPlanDTO } from '../DTOs/IPlanDTO'
import Plan from '../Models/Plan'

export interface IPlanRepository {
  findAll(): Promise<Plan[]>
  create(data: IPlanDTO): Promise<Plan>
  findById(id: number): Promise<Plan | null>
  update(data: Partial<IPlanDTO>): Promise<Plan | undefined>
  delete(id: number): Promise<Plan | null>
}
