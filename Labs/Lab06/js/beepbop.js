let randomNumArray = [min = 1, max = 1];
function randomInt(min, max) {
    return Math.floor(Math.random() * (randomNumArray.max) + randomNumArray.min);
}
let randomNum = randomInt(1,25); //returns random integer between 1 and 25.
console.log(randomNum);
let div = document.getElementById("beepbop");
//Setting up the loop to display the randomNum and beep, bop, or beepbop.
for(i = 0; i <= 25; i++) {
    div.innerHTML = randomNum;
    if(randomNum == randomNum[2],randomNum[5],randomNum[8],randomNum[11],randomNum[17],randomNum[20],randomNum[23]) {
        div.innerHTML += " beep ";
    }
    else if(randomNum == 5,10,15,20,25) {
        div.innerHTML += " bop ";
    }
    else if(randomNum == randomNum[14]) {
        div.innerHTML += " beepbop ";
    }
    else {
        div.innerHTML = randomNum;
    }
}