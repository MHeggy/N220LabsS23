let array = ["cosmic", "delicious", "citrus", "navel", "fuji"];
let div = document.getElementById("Week7");

for(i = 0; i <= 5; i++) {
    if(array == "citrus" || array == "navel") {
        div.innerHTML = array[0];
        div.innerHTML += array[1];
        div.innerHTML += array[4];
}
}