const cards = [
    document.getElementById("card-1"),
    document.getElementById("card-2"),
    document.getElementById("card-3"),
    document.getElementById("card-4"),
    document.getElementById("card-5"),
    document.getElementById("card-6"),
    document.getElementById("card-7"),
    document.getElementById("card-8")
  ];
  
  // Initialize card values.
  let cardValues = ["A", "A", "B", "B", "C", "C", "D", "D"];
  
  // Shuffle card values.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Set value for shuffled values.
  let shuffledValues = shuffleArray(cardValues);
  
  // Set value for each card using for loop.
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute("data-value", shuffledValues[i]);
    cards[i].setAttribute("data-selected", 0); // Add a data-selected attribute to track number of times selected.
  }
  
  // Initialize variable for the amount of matches.
  let numMatches = 0;
  
  // Initialize variable for the selected cards and matched cards.
  let selectedCards = [];
  let matchedCards = [];
  
  // Set up checkMatch function.
  function checkMatch() {
    let card1 = selectedCards[0];
    let card2 = selectedCards[1];
    // If statement checking the match.
    if (card1.getAttribute("data-value") == card2.getAttribute("data-value")) {
      // Two cards are matches.
      card1.style.backgroundColor = "grey";
      card2.style.backgroundColor = "grey";
      card1.innerHTML = "";
      card2.innerHTML = "";
      matchedCards.push(card1, card2);
    } else {
      // Not a match.
      card1.style.backgroundColor = "blue";
      card2.style.backgroundColor = "blue";
      setTimeout(function() {
        card1.innerHTML = "";
        card2.innerHTML = "";
      }, 2000);
    }
  
    // Clearing the array for the next turn.
    selectedCards = [];
  }
  
  // Set up the revealCard function.
  function revealCard(cardId) {
    const card = document.getElementById(cardId);
    const value = card.getAttribute("data-value");
    card.textContent = value;
    card.setAttribute("data-state", "revealed");
  
    // Allow a card to be selected if it has been selected less than twice.
    const selectedCount = parseInt(card.getAttribute("data-selected"));
    if (selectedCount < 2) {
      card.style.backgroundColor = "white";
      card.innerHTML = value;
      card.classList.add("revealed");
      selectedCards.push(card);
      card.setAttribute("data-selected", selectedCount + 1); // Increment data-selected attribute.
    }
  
    if (selectedCards.length == 2) {
      // Two cards selected, setting the timeout to 2 secs.
      setTimeout(checkMatch, 2000);
    }
    // If card is already revealed or matched, don't do anything.
    if (card.getAttribute("data-state") !== "hidden") {
      return;
    }
  }
  