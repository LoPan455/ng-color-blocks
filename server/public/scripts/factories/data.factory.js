// this is the empty factory referenced in the instructions

colorBlocks.factory('DataFactory',function() {

  var colors = [{name:'red'},{name:'purple'},{name:"AliceBlue"},{name:"Green"},{name:"Aqua"},{name:"Aquamarine"},{name:"pink"},{name:"Beige"},{name:"Black"}];
  var players = [{name: 'Donald Bagel', score: 145},{name: 'Carolyn', score: 3015}];  // the databse of players


  // finds the high score among all past players in the 'database'
  var highScoreFinder = function (array){
      console.log('highscore finder() hits');
      //sets a temporary holding spot to collect all past scores
      var container = [];
      for (var i = 0; i < array.length; i++) {
        container.push(array[i].score)
      }
      //sorts the container so the largest value is at the end
      container.sort();
      //pops the largest value off the end and returns it out of the function
      return container.pop();
      }

  //our factory 'exports'
  return {
    gameColors: colors,
    gamePlayers: players,
    highScoreFinder: highScoreFinder
  }


});
