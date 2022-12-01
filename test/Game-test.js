const chai = require('chai');
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");
const Game = require("../src/Game.js");

describe('Game', function() {
    it('should be a function', function() {
      const game = new Game()
      expect(Game).to.be.a('function')
    })
  })