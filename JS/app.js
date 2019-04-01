var tuister=angular.module('tuister',['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        controller: 'Demo',
        templateUrl: 'index.html'
    })
    .when('/login',{
        controller: 'login',
        templateUrl: 'login.html'
    })
    .when('/crearCuenta',{
        controller: 'Registro',
        templateUrl: 'crearCuenta.html'
    })
    .when('/mostrar',{
        controller: 'mostrarPosts',
        templateUrl: 'mostrar.html'
    })
    .when('/index',{
        controller: 'Post',
        templateUrl: 'listar.html'
    })
    .when('/post',{
        controller : 'Demo',
        templateUrl :'post.html'
    })
    .when('/post',{
        controller : 'Info',
        templateUrl : 'post.html'
    })
    .when('/info/:id',{
        controller: 'info',
        templateUrl:'info.html'
    })
    .otherwise('/');
})