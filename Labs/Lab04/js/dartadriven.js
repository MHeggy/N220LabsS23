//Initializing my objects for the drawing
let person = {x: 0, y: 0, height: 100, width: 25, radius: 40};
let road = {x: 0, y: 0, length: 800, width: 100, num_lines: 3};
let sun = {x: 0, y: 0, radius: 200, color: 'yellow'};
let canvas = {x: 800, y: 600, color: 'blue'};
//Setup function.
function setup() {
    createCanvas(canvas.x, canvas.y);
}
function draw() {
    background(canvas.color);
    drawPerson(person);
    drawRoad(road);
    drawSun(sun);
}
function drawPerson(person) {
    //Drawing the head.
    circle(person.x + 400, person.y + 300, person.radius + 10);
    //Drawing the two eyes.
    circle(person.x + 390, person.y + 295, person.radius - 30);
    circle(person.x + 410, person.y + 295, person.radius - 30);
    //Drawing the mouth.
    line(person.x + 390, person.y + 315, person.x + 410, person.y + 315);
    //Drawing the nose.
    triangle(person.x + 395, person.y + 310, person.x + 400, person.y + 300, person.x + 405, person.y + 310);
    //Drawing body.
    line(person.x + 400, person.y + 325, person.x + 400, person.y + 400);
    //Drawing both legs.
    line(person.x + 400, person.y + 400, person.x + 380, person.y + 450);
    line(person.x + 400, person.y + 400, person.x + 420, person.y + 450);
    //Drawing both arms.
    line(person.x + 400, person.y + 350, person.x + 380, person.y + 340);
    line(person.x + 400, person.y + 350, person.x + 420, person.y + 340);
}
function drawRoad(road) {
    //Top line of road.
    line(road.x, road.y + 400, road.x + 800, road.y + 450);
    //Median line of road.
    line(road.x, road.y + 500, road.x + 800, road.y + 450);
    //Bottom line of road.
    line(road.x, road.y + 450, road.x + 800, road.y + 450);
}
function drawSun() {
    fill(sun.color);
    circle(sun.x + 800, sun.y, sun.radius);
    line(sun.x + 700, sun.y, sun.x + 600, sun.y + 80);
    line(sun.x + 710, sun.y + 20, sun.x + 650, sun.y + 80);
    line(sun.x + 720, sun.y + 30, sun.x + 670, sun.y + 80);
    line(sun.x + 730, sun.y + 40, sun.x + 680, sun.y + 80);
}