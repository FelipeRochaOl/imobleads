import Env from '@ioc:Adonis/Core/Env'
import fs from 'fs'

import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'

import { IStorageProvider } from 'App/Shared/Interfaces/IStorageProvider'
import { IUploadService } from 'App/Shared/Interfaces/IUploadService'
import UploadServices from 'App/Shared/Services/Upload/UploadServices'

class S3StorageProvider implements IStorageProvider {
  private client: S3Client
  private getObjectCommand: GetObjectCommand
  private putObjectCommand: PutObjectCommand
  private deleteObjectCommand: DeleteObjectCommand
  private uploadService: UploadServices

  constructor() {
    this.client = new S3Client({
      credentials: {
        accessKeyId: Env.get('AWS_ACESS_KEY_ID'),
        secretAccessKey: Env.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: Env.get('AWS_DEFAULT_REGION'),
    })
    this.uploadService = new UploadServices()
  }

  public async saveFile({ image, pathName }: IUploadService) {
    const fileUploader = await this.uploadService.execute({ image, pathName })

    if (!fileUploader) {
      throw new Error('Could not save file')
    }

    const input = {
      Bucket: Env.get('AWS_DEFAULT_BUCKET'),
      Key: `${pathName}/${image.fileName}`,
    }

    this.putObjectCommand = new PutObjectCommand({
      ...input,
      Body: fs.createReadStream(fileUploader),
    })

    const uploadObjectResponse = await this.client.send(this.putObjectCommand)

    if (uploadObjectResponse.$metadata.httpStatusCode !== 200) {
      throw new Error('Unable to upload file to S3')
    }

    this.getObjectCommand = new GetObjectCommand(input)
    const getObjectResponse = await this.client.send(this.getObjectCommand)

    if (getObjectResponse.$metadata.httpStatusCode !== 200) {
      throw new Error('File does not exist in bucket')
    }

    return input.Key
  }

  public async deleteFile(file: string) {
    if (!file) {
      throw new Error('File does not exist')
    }

    const input = {
      Bucket: Env.get('AWS_DEFAULT_BUCKET'),
      Key: file,
    }

    this.deleteObjectCommand = new DeleteObjectCommand(input)

    const deleteObjectResponse = await this.client.send(
      this.deleteObjectCommand
    )

    if (deleteObjectResponse.$metadata.httpStatusCode !== 204) {
      throw new Error('File does not exist in bucket')
    }

    return true
  }
}

export default S3StorageProvider
