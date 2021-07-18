import { IImmobileDTO } from '../DTOs/IImmobileDTO'
import { IImmobileRepository } from '../Interfaces/IImmobileRepository'
import Immobile from '../Models/Immobile'

export default class ImmobileRepository implements IImmobileRepository {
  public async findAll(): Promise<Immobile[]> {
    return await Immobile.all()
  }

  public async create(data: IImmobileDTO): Promise<Immobile> {
    return await Immobile.create(data)
  }

  public async findById(id: number): Promise<Immobile | null> {
    return await Immobile.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<IImmobileDTO>): Promise<Immobile | undefined> {
    const immobile = await Immobile.findBy('id', id)
    return await immobile?.merge(data).save()
  }

  public async delete(id: number): Promise<Immobile | null> {
    const immobile = await Immobile.findBy('id', id)
    immobile?.softDelete()
    return immobile
  }
}
