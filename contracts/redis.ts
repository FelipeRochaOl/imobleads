/* eslint-disable @typescript-eslint/naming-convention */
declare module '@ioc:Adonis/Addons/Redis' {
  interface RedisConnectionsList {
    local: RedisConnectionConfig
    session: RedisConnectionConfig
  }
}
