import { IPortalDTO } from '../DTOs/IPortalDTO'
import { IPortalRepository } from '../Interfaces/IPortalRepository'
import Portal from '../Models/Portal'

export default class PortalRepository implements IPortalRepository {
  public async findAll(): Promise<Portal[]> {
    return await Portal.all()
  }

  public async create(data: IPortalDTO): Promise<Portal> {
    return await Portal.create(data)
  }

  public async findById(id: number): Promise<Portal | null> {
    return await Portal.findBy('id', id)
  }

  public async update({
    id,
    ...data
  }: Partial<IPortalDTO>): Promise<Portal | undefined> {
    const portal = await Portal.findBy('id', id)
    return await portal?.merge(data).save()
  }

  public async delete(id: number): Promise<Portal | null> {
    const portal = await Portal.findBy('id', id)
    portal?.softDelete()
    return portal
  }
}
