// A falsy value is a value that is considered false when encountered in a boolean context
// (false, 0, empty strings ie "" | '' | ``, null, undefined)
// This means that when JS is expecting a boolean and it is given one of these values, it will always evaluate to falsy


let isOne = true;

if(isOne == true){
    console.log('The light is on');
}

isOn = false;
if(isOn == true){
    console.log('The light is off');
}

let weather = 55;

if (weather <70){
    console.log("Wear a jacket")
}