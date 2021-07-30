import { IClientDTO } from 'App/Modules/Client/DTOs/IClientDTO'

export interface ICreateUserDTO {
  id?: string
  email: string
  password: string
  client: IClientDTO
  role?: 'admin' | 'corretor' | 'imobiliaria' | 'cliente'
}
