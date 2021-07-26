class UserUtils {
  public static convertClientType(type: string) {
    switch (type) {
      case 'corretor':
        return 'Corretor'
      case 'imobiliaria':
        return 'Imobiliária'
      default:
        return 'Cliente'
    }
  }
}

export default UserUtils
