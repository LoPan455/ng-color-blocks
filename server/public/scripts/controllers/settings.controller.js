

colorBlocks.controller('SettingsController',['DataFactory', function(DataFactory) {
  console.log("settings controller running");

 var self = this;

 self.gameColors = DataFactory.gameColors;
 self.newColor = '';

 self.addColor = function(color) {
   console.log('submit button clicked');
  self.gameColors.push(angular.copy(self.newColor));
 }

}]);
