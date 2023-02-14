//Initializing Variables
let d = document.getElementById("peakPixels");
let div_1 = {height: 100, width: 100, color_background: 'green'}
//Now setting up the height and width of the div and background color.
d.style.width = div_1.width + "px";
d.style.height = div_1.height + "px";
d.style.backgroundColor = div_1.color_background;

function changeSize() {
    d.style.width = 1.1 * div_1.width + "px";
    d.style.height = 1.1 * div_1.height + "px";
}