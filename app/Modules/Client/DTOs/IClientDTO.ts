export interface IClientDependences {
  id: number
  client_id: number
}

export interface IClientDTO {
  id?: number
  user_id?: string
  belongs_to_the_client_id?: number
  name: string
  cpf?: string
  cnpj?: string
  creci?: string
  type?: 'Corretor' | 'Imobiliária' | 'Cliente'
}
