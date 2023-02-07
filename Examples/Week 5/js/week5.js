let headerTxt = document.getElementById("header_1");
let testDiv = document.getElementById("test");

//change the text
headerTxt.innerHTML = "It's different now."
//change the style
headerTxt.style.backgroundColor = "#FF00FF"
//test div changes
testDiv.style.height = "60px";
testDiv.style.width = "60px";
testDiv.style.backgroundColor = "purple";
testDiv.style.textAlign = "center";

//setting up a function
function exampleResponse() {
    testDiv.style.backgroundColor = "white";
    testDiv.style.color = "red";
}