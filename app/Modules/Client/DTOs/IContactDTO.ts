import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'

export interface IContactDTO {
  id?: number
  client_id?: number
  name: string
  email: string
  website?: string
  logo: string
  logoUpload?: MultipartFileContract | null
  office_name?: string
  telephone: string
  primary?: boolean
}
