export interface ICreateUserDTO {
  id?: string
  email: string
  password: string
  role?: 'admin' | 'corretor' | 'imobiliaria' | 'cliente'
}
