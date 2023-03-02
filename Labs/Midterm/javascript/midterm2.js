let buttons = document.querySelectorAll("button")
let reveal = document.getElementById("numClicks");
let numClicks;
buttons.forEach(button => button.addEventListener("click", (e) =>  {
    button = e.target.id;
    if(e.buttons == 1) {
        reveal.innerHTML = 1;
    }
    if(e.buttons == 2) {
        reveal.innerHTML = 2;
    }
    if(e.buttons == 3) {
        reveal.innerHTML = 3;
    }
    if(e.buttons == 4) {
        reveal.innerHTML = 4;
    }
    if(e.buttons == 5) {
        reveal.innerHTML = 5;
    }
    console.log(e.buttons)
}));
