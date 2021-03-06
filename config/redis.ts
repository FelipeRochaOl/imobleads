import Env from '@ioc:Adonis/Core/Env'
import { RedisConfig } from '@ioc:Adonis/Addons/Redis'

const redisConfig: RedisConfig = {
  connection: Env.get('REDIS_CONNECTION'),
  connections: {
    local: {
      host: Env.get('REDIS_HOST'),
      port: Env.get('REDIS_PORT'),
      password: Env.get('REDIS_PASSWORD', ''),
      db: 0,
      keyPrefix: 'imobleads_',
      healthCheck: true,
    },
    session: {
      host: Env.get('REDIS_HOST'),
      port: Env.get('REDIS_PORT'),
      password: Env.get('REDIS_PASSWORD', ''),
      db: 1,
      keyPrefix: 'session_imobleads_',
      healthCheck: true,
    },
  },
}

export default redisConfig
