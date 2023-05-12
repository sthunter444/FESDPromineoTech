// Define a Card class to represent each card and number values for each card
class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
      this.numericalValue = this.calculateNumericalValue(value);
    }
  
    calculateNumericalValue(value) {
      const faceCards = { Jack: 11, Queen: 12, King: 13, Ace: 14 };
      return faceCards[value] || parseInt(value);
    }
  }
     
  
  // Define a Deck class to represent a deck of cards
  class Deck {
    constructor() {
      this.cards = [];// an array to hold the cards in the deck
      const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];//array with suits
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
      ]; //array with all the cards values
      
      //this will generate all the different combos of suits and values
        for (let suit of suits) {
        for (let value of values) {
          let card = new Card(suit, value);//create a new card object
          this.cards.push(card);//add the card to the deck
        }
      }
      this.shuffle();//shuffle the deck 
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  //deal and card from the deck then remove the last card
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
  //play card from players hand
    playCard() {
      return this.hand.pop();
    }
  //add a card to players hand
    addCard(card) {
      this.hand.push(card);
    }
  //add point to players score
    addPoint() {
      this.score += 1;
    }
  }
  
  // Create the Deck and deal cards to two Players
  const deck = new Deck();
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");

  //deal the cards to the players
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
  
  // Display the final score and declare the winner or declare a tie
  console.log(`${player1.name}: ${player1.score} points`);
  console.log(`${player2.name}: ${player2.score} points`);
  if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`);
  } else if (player2.score > player1.score) {
    console.log(`${player2.name} wins!`);
  } else {
    console.log("It's a tie!");
  }