let words = ["Indiana", "University", "Purdue", "University", "Indianapolis"];
function backwards() {
    for(var i = 1; i <= 5; i++) {
        console.log(words[4]--);
    }
    return(words)
}