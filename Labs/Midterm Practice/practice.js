let div = document.getElementById("d1"); 
div.style.width = 200 + "px";
div.style.height = 200 + "px";
div.style.backgroundColor = "black";
let count = 0;
function changeSize() {
    div.style.width = 1.25 * 200 + "px";
    div.style.height = 1.25 * 200 + "px";
    console.log(count);
}
div.addEventListener("click", (e) => {
    switch(++count) {
        case 1: if(count == 3) {
            div.style.backgroundColor = "green";
        }
    }
})