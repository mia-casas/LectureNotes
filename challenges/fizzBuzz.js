let FB = 15;

if(FB%3===0&& FB%5===0){
    console.log("Fizz Buzz");
} 
else if(FB%5===0){
    console.log("Buzz");
}
else if (FB%3===0){
    console.log("Fizz");
}
else{
    console.log();
}


// OTHER POSSIBLE SOLUTIONS
/*
Switch:
switch (true){
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log(FB);
}


Ternary:
(FB%5 == 0)?(FB%3==0)?console.log("Fizz Buzz"):
console.log("Buzz") :
(FB % 3 == 0) ? 
console.log("Fizz") :
console.log()





*/