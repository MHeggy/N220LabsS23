let d1 = document.getElementById("div-1");
let d2 = document.getElementById("div-2");
let d3 = document.getElementById("div-3");
//Background color of divs.
d1.style.backgroundColor = "red";
d2.style.backgroundColor = "red";
d3.style.backgroundColor = "red";
//Height and Width of divs.
//div 1
d1.style.height = 200 + "px";
d1.style.width = 200 + "px";
//div 2
d2.style.height = 200 + "px";
d2.style.width = 200 + "px";
//div 3
d3.style.height = 200 + "px";
d3.style.width = 200 + "px";
//Function for first div.
d1.addEventListener("click", (e) => {
    d1.style.backgroundColor = "blue";
    d1.style.width = 100 + "px";
})
//Function for second div.
d2.addEventListener("click", (e) => {
    d2.style.backgroundColor = "blue";
    d2.style.width = 100 + "px";
})
//Function for third div.
d3.addEventListener("click", (e) => {
    d3.style.backgroundColor = "blue";
    d3.style.width = 100 + "px";
})