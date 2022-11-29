const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

    it('should take in a guess', function(){
        var turn = new Turn('array');

        expect(turn.guess).to.equal('array')
    })
    it('should take in an instantiation of a card', function(){
        var card = new Card()
        var turn = new Turn('array', card)

        expect(turn.card).to.equal(card)
    })
    it('should return the guess using a method', function(){
        var card = new Card()
        var turn = new Turn('array', card)

        expect(turn.returnGuess()).to.equal('array')
    })
    it('should return the card using a method', function(){
        var card = new Card()
        var turn = new Turn('array', card)

        expect(turn.returnCard()).to.equal(card)
    })
    it('should include a method that determines whether the guess is correct', function(){
        var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        var turn = new Turn('object', card)
        var secondTurn = new Turn('array', card)
        expect(turn.evaluateGuess()).to.equal(true)
        expect(secondTurn.evaluateGuess()).to.equal(false)
    })
    it('should give feedback based on whether the guess was correct or not', function(){
        var card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        var turn = new Turn('object', card)
        var secondTurn = new Turn('array', card)
        expect(turn.giveFeedback()).to.equal('correct!')
        expect(secondTurn.giveFeedback()).to.equal('incorrect!')
    })
})