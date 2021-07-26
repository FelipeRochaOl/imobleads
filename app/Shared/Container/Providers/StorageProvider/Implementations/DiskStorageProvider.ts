import fs from 'fs'
import { IStorageProvider } from 'App/Shared/Interfaces/IStorageProvider'
import { IUploadService } from 'App/Shared/Interfaces/IUploadService'

import UploadServices from 'App/Shared/Services/Upload/UploadServices'

class DiskStorageProvider implements IStorageProvider {
  private uploadService: UploadServices

  constructor() {
    this.uploadService = new UploadServices()
  }

  public async saveFile({ image, pathName }: IUploadService) {
    const fileUploader = await this.uploadService.execute({ image, pathName })

    if (!fileUploader) {
      throw new Error('Could not save file')
    }

    return fileUploader
  }

  public async deleteFile(file: string) {
    if (!file) {
      throw new Error('File does not exist')
    }

    const fileExists = await fs.promises.stat(file)

    if (!fileExists) {
      throw new Error('File is not exists')
    }

    await fs.promises.unlink(file)

    return true
  }
}

export default DiskStorageProvider
