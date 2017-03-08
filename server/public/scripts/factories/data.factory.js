// this is the empty factory referenced in the instructions

colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];





  return {
    gameColors: colors
  }


}]);
