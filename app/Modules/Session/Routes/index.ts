import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'SessionController.create').as('login')
}).prefix('api')
