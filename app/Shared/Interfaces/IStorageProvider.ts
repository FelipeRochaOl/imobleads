import { IUploadService } from './IUploadService'

export interface IStorageProvider {
  saveFile({ image, pathName }: IUploadService): Promise<string>
  deleteFile(file: string): Promise<boolean>
}
