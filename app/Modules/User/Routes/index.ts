import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.resource('users', 'User/Controllers/UserController').except([
      'edit',
      'create',
      'show',
      'store',
    ])
    Route.get('/users/:id', 'User/Controllers/UserController.show').as(
      'user.show'
    )
  }).middleware('auth')

  Route.post('/users', 'User/Controllers/UserController.store').as('user.store')
}).prefix('api')
