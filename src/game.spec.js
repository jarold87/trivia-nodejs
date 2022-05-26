const Should = require('should');
const Game = require('./game.js');

describe("The test environment", () => {
  test("should pass", () => {
    expect(true).toEqual(true);
  });

  test("should access game", () => {
    expect(Game).not.toEqual(undefined);
  });
});

describe("Your specs...", () => {
  test("should have a winner", () => {
    var game = new Game();
    
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');
    
    do {
      game.roll(1);
      haveAWinner = game.wasCorrectlyAnswered();
    } while (game.hasWinner() === false);
    
    expect(game.hasWinner()).toEqual(true);
  })
});