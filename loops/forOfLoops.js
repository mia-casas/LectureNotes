// For of loops and for in loops both do the same thing -- loop over data structure
// One key difference: what they iterate over
    // for in loops iterate over the enumerable properties in an object
    //for of loops iterate over the values of an iterable object

    let catArray = ["tabby", "british shorthair", "burmese", "Maine coon", "rag doll"];

    for(cat of catArray){
        console.log(cat);
    }

// cannot use for of loops on objects
// for of loops best used on arrays
// for in loops best used on objects