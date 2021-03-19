// Switch statesmets execute a block of code depending on different cases

// The switch statement is often used together with a break or a default keyword or both. They are both optional. The break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
// the default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Optional, but recommended. It takes care of unexpected cases.

let officeCharacter = "Kevin";
switch(officeCharacter){
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Kevin":
        console.log("A mistake plus keleven gets you homee by seven");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let dessert = "pie";
switch(dessert){
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(dessert +" not on the menu");

}