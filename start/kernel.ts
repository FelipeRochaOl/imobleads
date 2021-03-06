import Server from '@ioc:Adonis/Core/Server'
Server.middleware.register([() => import('@ioc:Adonis/Core/BodyParser')])
Server.middleware.registerNamed({
  auth: () => import('App/Modules/Session/Middlewares/Auth'),
  silentAuth: () => import('App/Modules/Session/Middlewares/SilentAuth'),
  userAuthorization: () =>
    import('App/Modules/User/Middlewares/UserAuthorization'),
  clientAuthorization: () =>
    import('App/Modules/Client/Middleware/ClientAuthorization'),
})
