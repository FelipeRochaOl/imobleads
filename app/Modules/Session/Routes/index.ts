import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Session/Controllers/SessionController.store').as(
    'login'
  )

  Route.put('/refresh', 'Session/Controllers/SessionController.update')
    .as('refresh.token')
    .middleware('silentAuth')

  Route.delete('/logout', 'Session/Controllers/SessionController.delete')
    .as('logout')
    .middleware('auth')
}).prefix('api')
