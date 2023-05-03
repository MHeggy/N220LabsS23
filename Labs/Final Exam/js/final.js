//Setting card values along with suits.
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardBacks = "Back of Card"
//Setting variable for tableau and drawPile that will be empty.
let tableau = [[], [], [], [], [], [], []]
let drawPile = [];
let drawDisplay = document.getElementById("draw");
let cardDisplay = document.getElementById("card");
//setting up a function to start the game.
function startGame() {

}
//shuffling the deck.
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryCard;
    let randomIndex;

    //Setting up while loop for when cards still remain to be shuffled.
    while (currentIndex !== 0) {
        //Choosing random element still remaining.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        //Swap it with a current card.
        temporaryCard = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryCard;
    }
    return array;

}
let deck = [];
for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < cards.length; j++) {
        deck.push({card: cards[j], suit: suits[i]});
    }
}
//shuffle the deck.
shuffle(deck);
//Creating new deck of cards.
deck = [];
cardDisplay.textContent = cards;
