(function(angular){
  angular.module('base').controller('roomController',function($routeParams,$location,roomsService){
    this.roomid = $routeParams.id;
    this.name = 'John Montgomery';
  });
}(window.angular));
