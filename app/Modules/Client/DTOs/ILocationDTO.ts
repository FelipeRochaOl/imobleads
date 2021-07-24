export interface ILocationDTO {
  id?: number
  client_id?: number
  country: string
  state: string
  city: string
  zone?: string
  neighborhood: string
  address: string
  street_number?: string
  complement?: string
  postalcode: string
  latitude?: string
  longitude?: string
  primary?: boolean
}

export interface ILocationUpdateDTO
  extends Omit<ILocationDTO, 'id, client_id'> {
  id: number
  client_id: number
}

export interface ILocationDeleteDTO {
  id: number
  client_id: number
}
