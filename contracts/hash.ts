/* eslint-disable @typescript-eslint/naming-convention */
declare module '@ioc:Adonis/Core/Hash' {
  interface HashersList {
    bcrypt: {
      config: BcryptConfig
      implementation: BcryptContract
    }
    argon: {
      config: ArgonConfig
      implementation: ArgonContract
    }
  }
}
