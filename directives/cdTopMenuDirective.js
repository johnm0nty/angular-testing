(function(angular){
  angular
    .module('base')
    .directive('cdTopMenu',function(){
      function cdTopMenuController(){
        this.availableRooms = [{
          "id": 1,
          "name": "Sim City",
          "active": false
        },
        {
          "id": 2,
          "name": "Zelda",
          "active": false
        },
        {
          "id": 3,
          "name": "Sonic",
          "active": false
        },
        {
          "id": 4,
          "name": "Halo",
          "active": false
        }];
        this.setSelectedRoom = function(id){
          this.availableRooms.forEach((currentRoomInLoop) => {
            if(currentRoomInLoop.id === id){
              currentRoomInLoop.active = true;
            }else{
              currentRoomInLoop.active = false;
            }
          });
        };
      };
      return {
        templateUrl:'partials/topmenu.html',
        controller:cdTopMenuController,
        controllerAs:'topMenu',
        bindToController:{
          header:'@header'
        }
      }
    });
}(window.angular))
