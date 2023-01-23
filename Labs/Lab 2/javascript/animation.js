function setup() {
    createCanvas(400, 300)
}
function draw() {
    circle(mouseX, mouseY, 50px)
    if (mouseX > 200) {
    fill(#FF0000)
    }
    if (mouseX < 200) {
    fill(#0000FF)
    }
    }
    