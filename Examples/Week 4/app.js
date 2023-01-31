function setup() {
    createCanvas(800,600);
    background('black');
}
//Creating random objects
//A wheel - P5
let wheel = {
    x: 60,
    y: 100,
    radius: 40,
    speedX: 5,
    speedY: 4,
}

//A sandwich
let sandwich = {
    xPos: 10,
    yPos: 100,
    height: 10,
    width: 10,
    weight: 5,
    cheese: true,
    bread: true,
    meat: true,
}