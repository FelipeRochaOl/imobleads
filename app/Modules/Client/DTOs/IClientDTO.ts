export interface IClientDTO {
  id?: number
  user_id: string
  belongs_to_the_client_id: number
  name: string
  CPF?: string
  CNPJ?: string
  CRECI?: string
  type: 'Corretor' | 'Imobiliária' | 'Cliente'
}
