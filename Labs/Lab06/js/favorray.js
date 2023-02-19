let things = ["Videogames", "Computers", "Learning", "Family", "Friends"];
let favorray = document.getElementById("favorray");
for(i = 0; i <= 5; i++) {
    favorray.innerHTML = things[0] + ", are one of my favorite things.<br>";
    favorray.innerHTML += things[1] + ", are one of my favorite things.<br>";
    favorray.innerHTML += things[2] + ", is one of my favorite things. <br>";
    favorray.innerHTML += things[3] + ", is one of my favorite things. <br>";
    favorray.innerHTML += things[4] + ", are one of my favorite things. <br>";
}