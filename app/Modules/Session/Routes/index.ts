import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Session/Controller/SessionController.store').as('login')
  Route.put('/refresh', 'Session/Controller/SessionController.update').as('refresh.token')
  Route.delete('/logout', 'Session/Controller/SessionController.delete').as('logout')
}).prefix('api')
