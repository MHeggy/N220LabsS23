const cards = [
    document.getElementById("card-1"),
    document.getElementById("card-2"),
    document.getElementById("card-3"),
    document.getElementById("card-4"),
    document.getElementById("card-5"),
    document.getElementById("card-6"),
    document.getElementById("card-7"),
    document.getElementById("card-8"),
]
//Initializing the card Values.
let cardValues = ["A", "B", "C", "D"];

//Set a value for each card.
for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute("data-value", cardValues);
    cards[i].setAttribute("data-selected", 0);
}

//Initializing variable for num of matches.
let numMatches = 0;

//Initializing an empty array for selected cards and matched cards.
let selectedCards = [];
let matchedCards = [];

function checkMatch() {
    let card1 = selectedCards[0];
    let card2 = selectedCards[1];
    //If statements.
    if (card1.getAttribute("data-value") == card2.getAttribute("data-value")) {
        //Two cards are matches.
        card1.style.backgroundColor = "grey";
        card2.style.backgroundColor = "grey";
        card1.innerHTML = '';
        card2.innerHTML = '';
        matchedCards.push(card1, card2);
    }
    else {
        //Two cards are not a match.
        card1.style.backgroundColor = "blue";
        card2.style.backgroundColor = "blue";
        setTimeout(function() {
            card1.innerHTML = "";
            card2.innerHTML = "";
        }, 2000)
    }
    //Clearing array for the next turn.
    selectedCards = [];
}

//setting up function to reveal the card.
function revealCard(cardId) {
    const card = document.getElementById(cardId);
    const value = card.getAttribute("data-value");
    card.textContent = value;
    card.setAttribute("data-state", "revealed");

    const selectedCount = parseInt(card.getAttribute("data-selected"));
    if(selectedCount < 2) {
        card.style.backgroundColor = "white";
        card.innerHTML = value;
        card.classList.add("revealed");
        selectedCards.push(card);
        card.setAttribute("data-selected", selectedCount + 1)
    }
    if(selectedCount == 2) {
        setTimeout(checkMatch(), 2000)
    }
    if(card.getAttribute("data-state") !== "hidden") {
        return;
    }
}