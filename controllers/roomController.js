(function(angular){
  angular.module('base').controller('roomController',function($routeParams){
    this.roomid = $routeParams.id;
  });
}(window.angular));
