export interface ICreateUserDTO {
  id?: string
  email: string
  password: string
  client: string
  role?: 'admin' | 'corretor' | 'imobiliaria' | 'cliente'
}
