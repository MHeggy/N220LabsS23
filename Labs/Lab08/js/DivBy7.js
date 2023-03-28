let button = document.getElementById("btn");
let textInput = document.getElementById("input-1");
let resultsDiv = document.getElementById("resultDiv");
function divBy7() {
    if (textInput.value % 7 == 0) {
        resultsDiv.innerHTML = "Your number is divisible by 7!";
    }
    else {
        resultsDiv.innerHTML = "Your number is not divisible by 7, try again!";
    }
}
function result() {

}