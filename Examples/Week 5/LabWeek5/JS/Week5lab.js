let time = document.getElementById('coolThing');
function checkResponse(time) {
    if(time == "morning"); {
        document.getElementById("coolThing").innerHTML = "It is the morning.";
    }
    if(time == "afternoon") {
        document.getElementById("coolThing").innerHTML = "It is the afternoon."
    }
    if(time == "evening") {
        document.getElementById("coolThing").innerHTML = "It is the evening."
    }
}