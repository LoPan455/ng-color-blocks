// this is the empty factory referenced in the instructions

colorBlocks.factory('DataFactory',function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  console.log('DataFactory Colors are: ',colors);

  return {
    gameColors: colors,
    testText: 'test from DataFactory text'
  }


});
