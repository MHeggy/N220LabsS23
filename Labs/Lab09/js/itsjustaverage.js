let input = document.getElementById("userinput");
let results = document.getElementById("result");
let string = input.split(",");
let numbers = string.map(num => parseInt(num));
let sum = 0;

function displayResults() {
    results.innerHTML = "The sum of your numbers is " . sum; + "The average is: " . average;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}
//Average
let average = sum / numbers.length;