// Define a Card class to represent each card
class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  // Define a Deck class to represent a deck of cards
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
      const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace",
      ];      
        for (let suit of suits) {
        for (let value of values) {
          let card = new Card(suit, value);
          this.cards.push(card);
        }
      }
      this.shuffle();
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard() {
      return this.cards.pop();
    }
  }
  
  // Define a Player class to represent a player
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.pop();
    }
  
    addCard(card) {
      this.hand.push(card);
    }
  
    addPoint() {
      this.score += 1;
    }
  }
  
  // Create the Deck and deal cards to two Players
  const deck = new Deck();
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");
  for (let i = 0; i < 26; i++) {
    player1.addCard(deck.dealCard());
    player2.addCard(deck.dealCard());
  }
  
  // Play the game, one turn at a time
  for (let i = 0; i < 26; i++) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
    console.log(`${player1.name} plays ${card1.value} of ${card1.suit}`);
    console.log(`${player2.name} plays ${card2.value} of ${card2.suit}`);
    if (card1.value > card2.value) {
      player1.addPoint();
      console.log(`${player1.name} gets 1 point!`);
    } else if (card2.value > card1.value) {
      player2.addPoint();
      console.log(`${player2.name} gets 1 point!`);
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Display the final score and declare the winner
  console.log(`${player1.name}: ${player1.score} points`);
  console.log(`${player2.name}: ${player2.score} points`);
  if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`);
  } else if (player2.score > player1.score) {
    console.log(`${player2.name} wins!`);
  } else {
    console.log("It's a tie!");
  }