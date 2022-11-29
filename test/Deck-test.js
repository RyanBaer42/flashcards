const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js')

describe('Deck', function(){
    var card1, card2, card3, deck

    beforeEach(function(){
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
        deck = new Deck([card1, card2, card3])
    })
    it('Should take in an array of cards', function(){
        expect(deck.cards[0]).to.equal(card1)
        expect(deck.cards[1]).to.equal(card2)
        expect(deck.cards[2]).to.equal(card3)
    })
    it('should have a method that returns how many cards are in the deck', function(){
        expect(deck.countCards()).to.equal(3)
    })
})