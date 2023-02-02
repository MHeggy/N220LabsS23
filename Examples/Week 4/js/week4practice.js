let bike = {
    age: 0,
    wear: 0,
}

function ageUp(bike) {
    bike.age = bike.age + 1;
    if(bike.age >= 5) {
        bike.wear = 100;
    }
}

function tenyears(bike) {
    bike.age = bike.age + 10;
    if(bike.age >= 5) {
        bike.wear = 100;
    }
}

tenyears(bike);

console.log(bike);