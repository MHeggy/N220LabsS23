//Initializing my objects with their parameters.
let object_1 = {x: 0, y: 300, width: 40, height: 70, directionX: -1, directionY: 1, speedX: 1, speedY: 3};
let object_2 = {x: 0, y: 300, width: 40, height: 70, directionX: 1, directionY: -1, speedX: 1, speedY: 3};
//Initializing my canvas parameters and variables.
let canvas_2 = {x: 800, y: 600}
//Function setup section.
function setup() {
    createCanvas(canvas_2.x, canvas_2.y);
    //Drawing 2 Objects.
    drawObjects();
    //Motion
    motion();
}
function draw() {
    //Filling background.
    background('black');
    //Drawing 2 Objects.
    drawObjects();
    //Motion
    motion();
    //Change in direction.
    movedown(object_1, object_2);
    moveup(object_1, object_2);
}
//Setting up the functions to move:
function moveup(object_1, object_2) {
    if(keyIsDown(UP_ARROW)) {
        //Object 1 and 2 movement.
        object_1.y = object_1.y + (object_1.speedY * object_1.directionY);
        object_2.y = object_2.y + (object_2.speedY * object_2.directionY);
        //Setting up change in direction.
        object_1.directionY = object_1.directionY * -1;
        object_2.directionY = object_2.directionY * -1;
    }
    //Setting up parameters so that the objects do not continue moving off the screen.
    if(object_1.y > 600) {
        object_1.directionY = object_1.directionY*-1;
    }
    if(object_2.y > 600) {
        object_2.directionY = object_2.directionY*-1;
    }
    
}
function movedown(object_1, object_2) {
    if(keyIsDown(DOWN_ARROW)) {
        //Direction change.
        object_1.directionY = object_1.directionY*-1;
        object_2.directionY = object_2.directionY*-1;
    }
    //Setting parameters so that the objects do not move off the screen.
    if(object_1.y < 0) {
        object_1.directionY = object_1.directionY*-1;
    }
    if(object_2.y < 0) {
        object_2.directionY = object_2.directionY*-1;
    }
}
function motion() {
    //Object 1 and 2 movement.
    object_1.y = object_1.y + (object_1.speedY * object_1.directionY);
    object_2.y = object_2.y + (object_2.speedY * object_2.directionY);
}
//Draw Objects function.
function drawObjects() {
    //Drawing two objects.
    rect(object_1.x, object_1.y, object_1.width, object_1.height);
    rect(object_2.x + 760, object_2.y, object_2.width, object_2.height);
}
