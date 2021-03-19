let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hot dog"];

for (let i =0; i < food.length; i++){
    console.log(food[i]);
}

// VERSUS

food.forEach(foodItem => console.log(foodItem));
// the forEach method CANNOT return a value

let movies = ["Lady and the Tramp", "Dumbo", "Aladdin", "The Aristocats"];

movies.forEach(movieTitle => console.log(movieTitle));


movies.push("The Jungle Book");
console.log(movies); //?

movies. splice(2, 1, "The Lion King");
console.log(movies);