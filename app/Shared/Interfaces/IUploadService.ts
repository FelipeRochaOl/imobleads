import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'

export interface IUploadService {
  image: MultipartFileContract
  pathName: string
}
