import fs from 'fs'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { IUploadService } from 'App/Shared/Interfaces/IUploadService'

export default class UploadServices {
  public async execute({ image, pathName }: IUploadService) {
    if (!image) {
      throw new Error('Image undefined')
    }

    const fileName = `${cuid()}_logo.${image.extname}`
    const files = await fs.promises.readdir(`tmp/uploads/${pathName}`)

    const promises = files.map((filePath) => {
      if (filePath !== pathName) {
        return fs.promises.unlink(`tmp/uploads/${pathName}/${filePath}`)
      }
    })

    await Promise.all(promises)
      .then(() => console.log(`Deleted file success`))
      .catch((e) => console.error(e))

    await image.move(Application.tmpPath(`uploads/${pathName}`), {
      name: fileName,
      overwrite: true,
    })

    return `tmp/uploads/${pathName}/${fileName}`
  }
}
