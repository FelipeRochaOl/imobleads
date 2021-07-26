import { container } from 'tsyringe'
import Env from '@ioc:Adonis/Core/Env'

import { IStorageProvider } from 'App/Shared/Interfaces/IStorageProvider'

import DiskStorageProvider from 'App/Shared/Container/Providers/StorageProvider/Implementations/DiskStorageProvider'
import S3StorageProvider from 'App/Shared/Container/Providers/StorageProvider/Implementations/S3StorageProvider'

const driver = Env.get('DRIVE_STORAGE')

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
}

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[driver]
)
