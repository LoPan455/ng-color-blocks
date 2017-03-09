// this is the empty factory referenced in the instructions

colorBlocks.factory('DataFactory',function() {
  console.log("data factory running");
  var colors = [{name:'red'},{name:'blue'}];
  console.log('DataFactory Colors are: ',colors);

  return {
    gameColors: colors,
  }


});
