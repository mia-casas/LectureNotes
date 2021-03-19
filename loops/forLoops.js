// Loops offer us a quick and easy way to do something repeatedly, or loop ovver something.
// There are many kinds of loops, but they all roughly do the same thing
// It will repeat until a specified condition evaluates to true
    // for statement
    // do while statement
    // while statement
    // labeled statement
    // break statement
    // for in statement
    // for of statement
// There is a DANAGER of infinite loops. Parts of a loop: (1) initial, expression, (2) condtion, (3) increment expression

let i =7;
for (i=0; i<10; i++){
    console.log(i);
}

// console.log("Global i variable:" i);

let a = 20;
for (a=0; a<=20; a+=2){
    console.log(a);
}

for (b=10; b>0; b--){
    console.log(b);
}

for (c=0; c>=-24 ;c-=2){
    console.log(c);
}


// not running correctly