//Assigning variables for my button and input.
let btn = document.getElementById("btn-1");
let nametxt = document.getElementById("input-1");
//Setting up the function to get the value of the variable and log it out to the console.
function getValue() {
    console.log(nametxt.value)
}
//Event listener for the click on the assigned button.
btn.addEventListener("click", getValue());