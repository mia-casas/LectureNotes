let garden = {
    vegetable: "zucchini",
    flower: "sunflower",
    fruit: "grapes",
    water: true,
    sun: true,
    size: 10, 
}

let test = Object.keys(garden);
console.log(test)
console.log(typeof test[0]);

console.log(garden.vegetable);
console.log(garden["vegetable"]);