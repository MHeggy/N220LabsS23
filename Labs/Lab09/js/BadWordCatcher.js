let input = document.getElementById("text-input");
const badWords = ["clear", "water", "tires"];
const result = document.getElementById("result");
function check() {
    const words = input.value;
    const split = words.split(" ");
    let tally = 0;

    for(let i = 0; i < split.length; i++) {
        if(badWords.includes(split[i])) {
            tally++;
        }
    }
    if(tally > 0) {
        result.textContent = "A Bad word was found!";
    }
    else {
        result.textContent = "No Bad words were found, good job!";
    }
    input.value = "";
}