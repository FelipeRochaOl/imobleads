import Route from '@ioc:Adonis/Core/Route'

import 'App/Modules/Health/routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
