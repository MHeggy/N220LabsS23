let button = document.getElementById("btn");
let div = document.getElementById("div-1");
function random() {
    return Math.floor(Math.random() * (10 - 0) + 1); 
}
function showRandom() {
    let randomNum = random();
    div.innerHTML = randomNum;
}