import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Session/Controller/SessionController.store').as('login')
}).prefix('api')
