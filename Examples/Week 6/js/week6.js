//This week is about loops and arrays. These two topics are pretty interrelated and loops can be quite challenging at times.
//Loops are used to run code within a block multiple times.
//Incrementing values
//let i = 0;
//i = i + 1;
//i++; this is called incrementing a value and this is equal to i + 1.

let i = 0;
/*
while(i < 5) {
    console.log("Hello");
    i++;
}
*/ 
//While loop is pretty much just an if statement that doesn't stop the code block until the specified condition is actually false.
for (i = 0; i < 5; i++) {
    let d = document.createElement("div");
    d.style.width = 100 + "px";
    d.style.height = 100 + "px";
    d.style.float = "left";
    d.innerHTML = `Div ${i}`;
    document.body.appendChild(d);
}
//Arrays are a collection of variables.
//Arrays are indexed
//Array indexes start at zero(0), and progress upwards.
//To get an item out of the array, use the square brackets and the index.