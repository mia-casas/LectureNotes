// A ternanry acts as a shortcut to writing if, if/else, and else/if statements

let num = 6; 

//ternary
(num > 0) ? console.log("yes") : console.log("no")

//instead of
if (num > 0){
    console.log('yes');
} else{
    console.log('no');
}

(num == 0) ? console.log("Hello") : (num < 0) ? console.log("hi") : console.log("Goodbye");

let age = 24;

(age >= 25) ? console.log('Yay! you can rent a car!') : (age >=21) ? console.log("Yay! You can drink.") : (age >= 18) ? console.log("Yay! You can vote") : console.log("Sorry, you're too young to do anything fun.")