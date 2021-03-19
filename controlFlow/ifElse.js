let weather = 55;

if (weather<70){
console.log("wear a jacket");
} else {
console.log("no jacket necessary");
}

let name = 'Mia';

if (name == 'Mia'){
    console.log(name);
} else {
    console.log('Hello, what is your name?');
}

name = 'Mia';
if (name == "Mia"){
    console.log('Hello, my name is' + name);
} else{
    console.log('Hello is your name' + name);
}

let anotherName = 'zACHARY';

if (anotherName.startsWith.isUpperCase){
    console.log(anotherName);
} else {
    console.log("Hey, this isn't written correctly");
} // Bronze - yay!

// if (anotherName.charAt(1).isUpperCase){
//     console.log(anotherName);
// } else {
//     console.log(anotherName.toLocaleLowerCase.trim(1));
// }  // Silver - no

if(anotherName[0] === anotherName[0].toUpperCase()){
    console.log(anotherName[0]);
} else {
    console.log(anotherName.substr(1).toLowerCase())
} //Silver

if(anotherName.startsWith.isUpperCase){
    console.log(anotherName.toLocaleLowerCase)
} else {
    console.log(anotherName[0].toUpperCase() + anotherName.substr(1).toLowerCase());
} //Gold


// Else If Statements

let age = 35;

if(age<=17){
    console.log("Sorry, you're too young to do anything.");
}
else if(age>=25){
    console.log("You can rent a car!");
}
else if(age>=21){
    console.log("You can drink!");
}
else {
    console.log("You can vote!");
}

// go from oldest age to lowest age so that the loop does not exit immediately