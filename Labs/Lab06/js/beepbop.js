//Setting up an array that has the max and min values for my randomInt function.
let randomNumArray = [1, 25];
//Setting up the randomInt() function so that I am able to get a random integer between 1 and 25.
function randomInt(min, max) {
    return Math.floor(Math.random() * (randomNumArray[1]) + randomNumArray[0]);
}
//Initialzing the randomNum variable.
let randomNum = randomInt(1,25); //returns random integer between 1 and 25.
//Setting up div from HTML file to display the number.
let div = document.getElementById("beepbop");
//Setting up the loop to display the randomNum and beep, bop, or beepbop.
for(i = 1; i <= 25; i++) {
    //If statement for the numbers divisble by 3.
    if(randomNum == 3 || randomNum == 6 || randomNum == 9 || randomNum == 12 || randomNum == 18 || randomNum == 21 || randomNum == 24) {
        div.innerHTML = randomNum + " beep ";
    }
    //Else if statement setup for the numbers that are divisible by 5.
    else if(randomNum == 5 || randomNum == 10 || randomNum == 20 || randomNum == 25) {
        div.innerHTML = randomNum + " bop ";
    }
    //Another else if statement that is setup for the beepbop for 15 which is divisible by 5 AND 3.
    else if(randomNum == 15) {
        div.innerHTML = randomNum + " beepbop ";
    }
    //Final else statement setup for any number that is not divisible by 3 or 5.
    else {
        div.innerHTML = randomNum;
    }
}