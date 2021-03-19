let check = 50;

let tipAmt = priceBeforeTip => {
    let tip = priceBeforeTip * 0.15;
    return tip;
}

let tip = tipAmt(check);
console.log(`Your meal cost $${check}. You should tip $${tip}.`);


let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

function b() {
    let myName = "Donovan";
    console.log(myName);
    console.log("I have been hoisted!")
}
function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());