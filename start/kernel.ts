import Server from '@ioc:Adonis/Core/Server'
Server.middleware.register([() => import('@ioc:Adonis/Core/BodyParser')])
Server.middleware.registerNamed({
  auth: () => import('App/Modules/Session/Middleware/Auth'),
  silentAuth: () => import('App/Modules/Session/Middleware/SilentAuth'),
})
