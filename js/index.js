(function(angular){
  angular.module('base',['ngRoute']).config(function($locationProvider,$routeProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/about',{
        templateUrl:'partials/about.html'
      })
      .when('/room/:id',{
        controller:'roomController',
        controllerAs:'roomCtrl',
        templateUrl:'partials/room.html'
      })
      .otherwise({
        controller:'baseController',
        controllerAs:'baseCtrl',
        templateUrl:'partials/base.html'
      });
  });
})(window.angular);
