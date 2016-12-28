# SinglePageApplication_simple
Single Page Application (simple application, c#.net, ASP.net, RESTfull, services, AngularJS 1.5.7)
Cette application est basée sur des services Web (WEB API ASP.net, c#.net, SQL Server, T-SQL)
Ces services sont consommés séparément par deux applications AngularJS : 
  _ La première application à pour but pédagogique de montrer l'authentification offerte par la classe contrôleur avec le mot clé [athorize] et pour voir comment une application AngularJS peut détecter la non autorisation avec le code 401 et différencier ce dernier des codes 403 (forbidden) et 404 (notFound)
  
  _ la deuxième est une application plus riche  à page unique aussi (SPA) développée en AngularJS et qui utilise la spécification ngRoute et le service d'autorisation (authService pour différencier entre 3 type d'utilisateur)
        - cette application permet :
              - à un utilisateur non authentifié de visualiser et chercher des annonce.
              - à un utilisateur authentifié de publier une annonce et de recevoir de messages de la part d'utilisateurs authentifier ou de messages de parts de modérateur de site.
              - à un modérateur de désactiver l'affichage d'une annonce s'il la juge non pertinente, cette opération exige l’envoi d'un message à l’utilisateur dont l’annonce est desactivé.
