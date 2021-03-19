/*
​
    function hi() {
        console.log("HI");
    }
    (1)
    hi()
​
    1-This is where we call, or "invoke" our function
​
    Cris Matson-"writing the function body is like buying a VHS tape, but you can't watch it unless you play() it"
*/
​
​
​
// function hi() {
//     console.log("HI");
// }
​
// hi;
// hi(); //this is the correct way to invoke a function
// console.log(hi);
// console.log(hi());

function list (){

for(i=1; i<=10; i++){
    console.log(i);
}
}

list();

let arr = ['This', 'is', 'really', 'cool'];

function sentence(){
    for(words of arr){
        console.log(words)
    }
}

sentence();

function myName(firstName, lastName){
    let completeName = " ";
    completeName += firstName + " " + lastName;
    console.log("Hello my name is" + completeName);
    
}

myName("Mia", "Casas")