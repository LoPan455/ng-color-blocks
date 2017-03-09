

colorBlocks.controller('SettingsController',['DataFactory','$scope', function(DataFactory, $scope) {
  console.log("settings controller running");

 var self = this;

 self.gameColors = DataFactory.gameColors;
 self.newColor = {};

 // self.chanageColor = function(){
 //   console.log('edit btn clicked');
 //   for (var i = 0; i < self.gameColors.length; i++) {
 //     self.gameColors[i]
 //   }
 // }

 self.addColor = function(color) {
   console.log('submit button clicked');


  self.gameColors.push(angular.copy(self.newColor));
 }

}]);
