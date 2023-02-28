let RPGS = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissors"), document.getElementById("guard")];
let scorePlayer = document.getElementById("scorecardPlayer");
let scoreComputer = document.getElementById("scorecardComputer");
let computerChoice = Rand.floor(Rand.math()*4 + 1);
let playerChoice = "";
function computer(computerChoice) {
if(computerChoice == 0) {
    computerChoice = RPGS[0]; //computer choses Rock.
}
else if(computerChoice == 1) {
    computerChoice = RPGS[1]; //computer choses Paper.
}
else if(computerChoice == 2) {
    computerChoice = RPGS[2]; //computer choses Scissors.
}
else {
    computerChoice = RPGS[3]; //computer choses Guard.
}
}
function winner(computerChoice, playerChoice) {
    if(playerChoice == "rock" && computerChoice == 0) {
        scoreComputer.innerHTML = 1;
        scorePlayer.innerHTML = 1;
    }
    else if(playerChoice == "rock" && computerChoice == 1) {
        scoreComputer.innerHTML += 1;
        scorePlayer.innerHTML += 0;
    }
    else if(playerChoice == "rock" && computerChoice == 2) {
        scoreComputer.innerHTML += 0;
        scorePlayer.innerHTML += 1;
    }
    else if(playerChoice == "paper" && computerChoice == 0) {
        scoreComputer.innerHTML += 0;
        scorePlayer.innerHTML += 1;
    }
    else if(playerChoice == "paper" && computerChoice == 1) {
        scoreComputer.innerHTML += 1;
        scorePlayer.innerHTML += 0;
    }
    else if(playerChoice == "paper" && computerChoice == 2) {
        scoreComputer.innerHTML += 1;
        scorePlayer.innerHTML += 0;
    }
}