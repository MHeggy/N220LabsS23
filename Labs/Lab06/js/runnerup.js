let bestTimes = [1, 6, 10];
let divs = [document.getElementById("winner"), document.getElementById("second"), document.getElementById("third")];

for(i = 0; i <= 3; i++) {
    divs[2].innerHTML = bestTimes[2] + ": This is the winner! ";
    divs[1].innerHTML = bestTimes[1] + ": This is the second place time! So close. ";
    divs[0].innerHTML = bestTimes[0] + ": This is the third place time, better luck next time! ";
}