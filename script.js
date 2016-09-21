(function(angular){
  'use strict';
  var app = angular.module('app',[]);
  app.controller('hello',function($scope){
    $scope.greeting = 'Hello world!';
  });
  app.controller('goodbye',function($scope){
    $scope.greeting = 'See you later world!';
  });
})(window.angular);
