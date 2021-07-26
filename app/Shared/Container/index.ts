import { container } from 'tsyringe'

import 'App/Shared/Container/Providers/index'

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

import LocationRepository from 'App/Modules/Client/Repositories/LocationRepository'
import { ILocationRepository } from 'App/Modules/Client/Interfaces/ILocationRepository'

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

container.registerSingleton<ILocationRepository>(
  'LocationRepository',
  LocationRepository
)
