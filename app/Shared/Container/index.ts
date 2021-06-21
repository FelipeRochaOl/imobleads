import { container } from 'tsyringe'

import { IUserRepository } from 'App/Modules/User/Interfaces/IUserRepository'
import UserRepository from 'App/Modules/User/Repositories/UserRepository'

import { IClientRepository } from 'App/Modules/Client/Interfaces/IClientRepository'
import ClientRepository from 'App/Modules/Client/Repositories/ClientRepository'

import { IImmobileRepository } from 'App/Modules/Immobile/Interfaces/IImmobileRepository'
import ImmobileRepository from 'App/Modules/Immobile/Repositories/ImmobileRepository'

import { IPortalRepository } from 'App/Modules/Portal/Interfaces/IPortalRepository'
import PortalRepository from 'App/Modules/Portal/Repositories/PortalRepository'

import { IContactRepository } from 'App/Modules/Client/Interfaces/IContactRepository'
import ContactRepository from 'App/Modules/Client/Repositories/ContactRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
)

container.registerSingleton<IImmobileRepository>(
  'ImmobileRepository',
  ImmobileRepository
)

container.registerSingleton<IPortalRepository>(
  'PortalRepository',
  PortalRepository
)

container.registerSingleton<IContactRepository>(
  'ContactRepository',
  ContactRepository
)
