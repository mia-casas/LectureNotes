// let num >= 0 && <=100;

// function fizzBuzz(){
//     let num =0;
//     for(let num =0; num>=0 && num <=100; num++);
//             if(num%3==0 && num%5==0){
//                 console.log("Fizz Buzz");
//         }
//              else if(num%5==0){
//                 console.log("Buzz");
//         }
//              else if(num%3==0){
//                 console.log("Fizz");
//         }
//             else{
//                 console.log(num);
//         }
// }
// fizzBuzz();

/// ????????

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
​
fizzBuzz();
​
//Switch
function fizzBuzz() {
    for (let FB = 0; FB <= 100; FB++) {
        switch (true) {
            case (FB % 3 === 0 && FB % 5 === 0):
                console.log('Fizz Buzz');
                break;
            case (FB % 5 === 0):
                console.log('Buzz');
                break;
            case (FB % 3 === 0):
                console.log('Fizz');
                break;
            default:
                console.log(FB);
        }
    }
}
​
fizzBuzz();

let FB = (x) => {
    for (i = 0; i <= x; i ++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
​
FB(100);



