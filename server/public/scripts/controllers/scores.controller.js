colorBlocks.controller('ScoresController',['DataFactory','$scope', function(DataFactory, $scope) {
  console.log("scores controller running");

  var self = this;
  self.players = DataFactory.gamePlayers;
  self.scoresArray = [];
  self.highScoreFinder = DataFactory.highScoreFinder;
  self.highScore = self.highScoreFinder(self.players);




}]);
