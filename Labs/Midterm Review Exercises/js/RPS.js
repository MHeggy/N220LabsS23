//Initializing all my variables using const.
const computer = document.getElementById("computerChoice");
const playerChoice = document.getElementById("userChoice");
const choices = document.querySelectorAll("button");
let playerScore = document.getElementById("scorecardUser")
let computerScore = document.getElementById("scorecardComputer");
let computerChoice;
var scoreComp = 0.0
var scorePlayer = 0.0
//Adding event listener for buttons.
choices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    playerChoice.innerHTML = userChoice;
    randomComputerChoice();
    if(userChoice == "rock") {
        userChoice = "rock";
    }
    if(userChoice == "paper") {
        userChoice = "paper";
    }
    if(userChoice == "scissors") {
        userChoice = "scissors";
    }
    if(userChoice == "guard") {
        userChoice = "guard";
    }
    console.log(userChoice)
    results(computerChoice, userChoice);
    
}))

function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 4) + 0;
    console.log(randomNumber);
    if(randomNumber == 0) {
        computerChoice = "rock"; //randomNumber = 0 then computerChoice is rock.
    }
    if(randomNumber == 1) {
        computerChoice = "paper"; //randomNumber = 1 then computerChoice is paper.
    }
    if(randomNumber == 2) {
        computerChoice = "scissors"; //randomNumber = 2 then computerChoice is scissors.
    }
    if(randomNumber == 3) {
        computerChoice = "guard"; //randomNumber = 3 then computerChoice is guard.
    }
    computer.innerHTML = computerChoice;
}

function results(computerChoice, userChoice) {
    if(computerChoice == userChoice) {
        
    }
    else if(computerChoice == "rock" && userChoice == "paper") {
            playerScore.innerHTML = ++scorePlayer
            computerScore.innerHTML = scoreComp
    }
    else if(computerChoice == "rock" && userChoice == "scissors") {
            computerScore.innerHTML = ++scoreComp
            playerScore.innerHTML = scorePlayer;
        }
    else if(computerChoice == "paper" && userChoice == "rock") {
            computerScore.innerHTML = ++scoreComp
            playerScore.innerHTML = scorePlayer;
        
    }
    else if(computerChoice == "scissors" && userChoice == "paper") {
            computerScore.innerHTML = ++scoreComp;
            playerScore.innerHTML = scorePlayer;
    }
    else if(computerChoice == "scissors" && userChoice == "rock") {
            playerScore.innerHTML = ++scorePlayer;
            computerScore.innerHTML = scoreComp;
    }
    else if(computerChoice == "guard") {
        computerScore.innerHTML = --scoreComp;
    }
    else if(userChoice == "guard") {
        playerScore.innerHTML = --scorePlayer;
    }
}



