/*
-For in loops are great for iterating over values in an object. Properties in objects are what's called enumerable
​
-For in loops iterate over an object's enumberable properties
*/


let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}
​
for (let degree in student) {
    console.log(degree);
    console.log(student[degree]);
}
​
let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];
​
for (cat in catArray) {
    // console.log(cat);
    // console.log(catArray[cat]);
}


let myName = "AnGeLES";
let capName;

for(let i in myName){
    if (i==0){
        capName = myName[i].toUpperCase();
    } else{
        capName += myName[i].toLowerCase();
    }
}
console.log(capName);