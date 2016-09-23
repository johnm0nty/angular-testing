(function(angular){
  angular.module('base').controller('baseController',function(){
    this.welcomeMessage = 'Conference Room Deconflicter';
    this.menuitems = [
      {
        'id':1,
        'name':'Halo'
      },
      {
        'id':2,
        'name':'Sim City'
      },
      {
        'id':3,
        'name':'Sonic'
      },
      {
        'id':4,
        'name':'Zelda'
      }
    ]
  });
}(window.angular));
