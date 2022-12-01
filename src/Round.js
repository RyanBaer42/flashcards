const Turn = require("./Turn.js")

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.currentCard;
    this.incorrectGuesses = []
  }
  takeTurn(guess) {
    var newTurn = new Turn(guess, this.returnCurrentCard())
    if (!newTurn.evaluateGuess()){
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turnCount ++
    return newTurn.giveFeedback()
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turnCount]
    return this.deck.cards[this.turnCount]
  }
  calculatePercentCorrect() {
    let percentage = this.incorrectGuesses.length / this.deck.cards.length * 100
    let grade = 100 - percentage.toFixed(2)
    let gradeWithSymbol = `${grade}%`
    return gradeWithSymbol
  }

  endRound() {
    console.log(`Round over! You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
    return(`Round over! You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
  }
}

module.exports = Round