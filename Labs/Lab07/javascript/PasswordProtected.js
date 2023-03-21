//Assigning variables for all needed fields of the assignment: username, password, the login button, and the div that will put the text indicating success or unsuccessful.
let password = document.getElementById("password");
let username = document.getElementById("username");
let d1 = document.getElementById("div-1");
let btn = document.getElementById("login");
//Setting up the function with if statements and else statement to ensure that the user types correct user and password fields.
function checkUserAndPass() {
    if(username.value == "Username" && password.value == "Password") {
        d1.innerHTML = "Success!";
    }
    else {
        d1.innerHTML = "Incorrect, try again!";
    }
}