// this is the empty factory referenced in the instructions

colorBlocks.factory('DataFactory',function() {

  var colors = [{name:'red'},{name:'purple'},{name:"AliceBlue"},{name:"Green"},{name:"Aqua"},{name:"Aquamarine"},{name:"pink"},{name:"Beige"},{name:"Black"}];
  var players = [{name: 'Donald Bagel', score: 145},{name: 'Carolyn', score: 3015}];
  var highScore = 0;
  var scoresArray = [];

  // var highScoreFinder = function() {
  //   console.log('highscore finder() hits');
  //   for (var i = 0; i < players.length; i++) {
  //     scoresArray.push(players.score);
  //   }
  //   scoresArray.sort()
  //   highScore = sortingContainer[sortingContainer.length - 1];
  //   return highScore;
  // }

  var highScoreFinder = function (array){
      console.log('highscore finder() hits');
      var container = [];
      for (var i = 0; i < array.length; i++) {
        container.push(array[i].score)
      }
     return container.pop();
    }




  return {
    gameColors: colors,
    gamePlayers: players,
    highScoreFinder: highScoreFinder
  }


});
