const Game = require('./game.js');

var game = new Game();

game.add('Chet');
game.add('Pat');
game.add('Sue');

do {

  game.roll(Math.floor(Math.random() * 6) + 1);

  if (Math.floor(Math.random() * 10) == 7) {
    haveAWinner = game.wrongAnswer();
  } else {
    haveAWinner = game.wasCorrectlyAnswered();
  }

} while (game.hasWinner() === false);