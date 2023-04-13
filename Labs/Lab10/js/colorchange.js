let div1 = document.getElementById("div-1");
let div2 = document.getElementById("div-2");
let div3 = document.getElementById("div-3");
//Div 1 styles.
div1.style.height = 200 + "px";
div1.style.width = 200 + "px";
div1.style.backgroundColor = "grey";
//Div 2 styles.
div2.style.height = 200 + "px";
div2.style.width = 200 + "px";
div2.style.backgroundColor = "grey";
//Div 3 styles.
div3.style.height = 200 + "px";
div3.style.width = 200 + "px";
div3.style.backgroundColor = "grey";

document.addEventListener("click", (e) => {
    if(e.target.id == "div-1") {
        div1.style.backgroundColor = "blue";
    }
    if(e.target.id == "div-2") {
        div2.style.backgroundColor = "black";
    }
    if(e.target.id == "div-3") {
        div3.style.backgroundColor = "red";
    }

})