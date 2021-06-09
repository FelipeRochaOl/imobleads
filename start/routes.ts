import Route from '@ioc:Adonis/Core/Route'

import 'App/Modules/Health/Routes'
import 'App/Modules/Session/Routes'
import 'App/Modules/User/Routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
