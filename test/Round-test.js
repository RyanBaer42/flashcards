const chai = require('chai');
const expect = chai.expect;

const Round = require("../src/Round.js");
const Turn = require("../src/Turn.js");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

describe('Round', function(){
    var card1,card1,card3,deck,round;
    beforeEach(function(){
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
        deck = new Deck([card1, card2, card3])
        round = new Round(deck)
    })
    it('should be a function', function(){
        expect(Round).to.be.a('function')
    })
    it('should be an instance of a Round', function(){
        expect(round).to.be.a.instanceOf(Round)
    })
    it('should take in an instance of a deck', function(){
        expect(round.deck).to.equal(deck)
    })
    it('should change cards with each turn', function(){
        const turn = new Turn('array');
        round.takeTurn('array');
        round.returnCurrentCard()
    
        expect(round.currentCard).to.equal(card2);
    })    
    it('should return the card being played using a method', function(){
        expect(round.returnCurrentCard()).to.equal(card1)
    })
    it('should update the turn count regardless of being correct or not after a card has been played using a method', function(){
        round.takeTurn('array')

        expect(round.turnCount).to.equal(1)

        round.takeTurn('gallbladder')

        expect(round.turnCount).to.equal(2)
    })
    it('should evaluate guesses using the same method', function(){
        
        expect(round.takeTurn('array')).to.equal('incorrect!')

        expect(round.takeTurn('gallbladder')).to.equal('correct!')
    })
    it('should be able to store incorrect guesses', function (){
        expect(round.incorrectGuesses).to.deep.equal([])
    })
    it('should be able to store the IDs of incorrect guesses', function(){
        round.takeTurn('array')
        expect(round.incorrectGuesses[0]).to.equal(1)
    })
    it('should calculate and return the percentage of correct guesses', function() {
        round.takeTurn('array')
        round.takeTurn('gallbladder')
        round.takeTurn('Fitzgerald')
    
        expect(round.calculatePercentCorrect()).to.equal('66.67%')
    })
    it('should reset the turn count if theres more turns than cards', function() {
        round.takeTurn('array')
        round.takeTurn('array')
        expect(round.turnCount).to.equal(2)
        round.takeTurn('array')
        expect(round.turnCount).to.equal(0)
    })
    it("should tell the user 'Round over! You answered x% of the questions correctly!'", function() {
        round.takeTurn('array')
        round.takeTurn('gallbladder')
        round.takeTurn('playing with bubble wrap')
        expect(round.endRound()).to.equal('Round over! You answered 33.33% of the questions correctly!')
    })
})