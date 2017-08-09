var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : './frontend/partials/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : './frontend/partials/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : './frontend/partials/about.html',
    controller  : 'AboutController'
  })
  .when('/dash', {
    templateUrl : './frontend/partials/dashboard.html',
    controller  : 'DashboardController'
  })

  .otherwise({redirectTo: '/'});
});
