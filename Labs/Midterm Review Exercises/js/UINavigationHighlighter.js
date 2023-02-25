//Initializing variables to carry my divs.
let divs = [document.getElementById("div1"), document.getElementById("div2"), document.getElementById("div3"), document.getElementById("div4"), document.getElementById("div5"), document.getElementById("div6")];
//Text to go into each of the divs
divs[0].innerHTML = "This is Div 1";
divs[1].innerHTML = "This is Div 2";
divs[2].innerHTML = "This is Div 3";
divs[3].innerHTML = "This is Div 4";
divs[4].innerHTML = "This is Div 5";
divs[5].innerHTML = "This is Div 6";
//Positioning d1 to top of the page.
divs[0].style.position = "absolute";
divs[0].style.top = 0 + "px";
divs[0].style.border = "solid";
//Positioning d2.
divs[1].style.position = "absolute";
divs[1].style.top = 0 + "px";
divs[1].style.left = 200 + "px";
divs[1].style.border = "solid";
//Position d3.
divs[2].style.position = "absolute";
divs[2].style.top = 0 + "px";
divs[2].style.left = 400 + "px";
divs[2].style.border = "solid";
//Position d4.
divs[3].style.position = "absolute";
divs[3].style.top = 0 + "px";
divs[3].style.left = 600 + "px";
divs[3].style.border = "solid";
//Position d5.
divs[4].style.position = "absolute";
divs[4].style.top = 0 + "px";
divs[4].style.left = 800 + "px";
divs[4].style.border = "solid";
//Position d6.
divs[5].style.position = "absolute";
divs[5].style.top = 0 + "px";
divs[5].style.left = 1000 + "px";
divs[5].style.border = "solid";
//Setting up the function for divs.
function changeDivs() {
    if(divs[0].onclick == "true") {
        divs[0].innerHTML = "You clicked on Div 1!";
        divs[1,2,3,4,5].innerHTML = "";
    }
}