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

});