import { container } from 'tsyringe'

import { IUserRepository } from 'App/Modules/User/Interfaces/IUserRepository'
import UserRepository from 'App/Modules/User/Repositories/UserRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
