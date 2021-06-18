import { container } from 'tsyringe'

import { IUserRepository } from 'App/Modules/User/Interfaces/IUserRepository'
import UserRepository from 'App/Modules/User/Repositories/UserRepository'

import { IClientRepository } from 'App/Modules/Client/Interfaces/IClientRepository'
import ClientRepository from 'App/Modules/Client/Repositories/ClientRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
)
