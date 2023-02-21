//Setting up the array 'nums' that includes the string of numbers to be displayed into the div.
let nums = [1000, 2000, 3000, 4000, 5000];
//Setting up the div from HTML so that I can manipulate it via JS file.
let div = document.getElementById("div1");
//Setting up for loop to display the array of numbers into the div.
for($i=0; $i <= 4; $i++) {
    div.innerHTML = nums;
}