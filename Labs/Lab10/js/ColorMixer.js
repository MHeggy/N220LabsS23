let colorDisplay = document.getElementById("colorDisplay");
let colorBox = document.getElementById("colorDiv");
//Color values.
let redValue = 0;
let greenValue = 0;
let blueValue = 0;
//Updating the rgb display box.
function updateColorDisplay() {
    const color = "rgb({redValue}, {greenValue}, {blueValue})";
    colorDisplay.textContent = color;
}
//Handling button clicks somehow.
function colorButtonClick(e) {
    const color = e.target.data-value;
    const value = parseInt(e.target.dataset.value);
    if(color == 'red') {
        redValue += value;
    }
    else if(color == 'green') {
        greenValue += value;
    }
    else if(color == 'blue') {
        blueValue += value;
    }
    updateColorDisplay();
}
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", colorButtonClick)
})
updateColorDisplay();