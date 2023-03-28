let sports = ["baseball", "football", "soccer", "basketball"];
let music = ["Rock", "Rap", "R&B", "Pop", "Jazz"];
let videogames = ["Apex Legends", "Call of Duty", "CS:GO", "Valorant"];
let sportsBtn = doucment.getElementById("btn-1");
let musicBtn = document.getElementById("btn-2");
let videogamesBtn = document.getElementById("btn-3");
let div = document.getElementById("displayTxt");
function showInfo() {
    sportsBtn.addEventListener("click", (e) => {
        div.innerHTML = sports;
    })
    musicBtn.addEventListener("click", (e) => {
        div.innerHTML = music;
    })
    videogamesBtn.addEventListener("click", (e) => {
        div.innerHTML = videogames;
    })
}