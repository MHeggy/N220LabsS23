//Initializing variables for the tip and the button to submit.
let tip = document.getElementById("total");
let btn = document.getElementById("btn-1");
//Setting up the calcTip() function to calculate the tip and total after user has entered their total.
function calcTip() {
    tipVal = tip.value * 0.2;
    total = tipVal + tip.valueAsNumber;
    console.log("Total: $" + total, "Tip: $" + tipVal);
}
btn.addEventListener("click", calcTip())