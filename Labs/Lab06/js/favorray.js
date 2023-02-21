//Setting up the array for my favorite things.
let things = ["Videogames", "Computers", "Learning", "Family", "Friends"];
//Getting the div from HTML document so that I can manipulate document properties.
let favorray = document.getElementById("favorray");
//Setting up for loop to display all of my favorite things into the div on HTML page.
for(i = 0; i <= 5; i++) {
    favorray.innerHTML = things[0] + ", are one of my favorite things.<br>";
    favorray.innerHTML += things[1] + ", are one of my favorite things.<br>";
    favorray.innerHTML += things[2] + ", is one of my favorite things. <br>";
    favorray.innerHTML += things[3] + ", is one of my favorite things. <br>";
    favorray.innerHTML += things[4] + ", are one of my favorite things. <br>";
}