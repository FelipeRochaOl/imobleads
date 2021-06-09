import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.resource('users', 'User/Controller/UserController').except([
      'edit',
      'create',
      'show',
      'store',
    ])
    Route.get('/users/:id?', 'User/Controller/UserController.show').as('user.show')
  }).middleware('auth')

  Route.post('/users', 'User/Controller/UserController.store').as('user.store')
}).prefix('api')
