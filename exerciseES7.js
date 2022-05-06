// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
if (dragons.includes("John")){
    console.log('Yes! The name "John" is in the array list');
}
else{
    console.log('No! The name "John" isn\'t in the array list');
}


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const newArray = dragons.filter(check => {   
    return check.includes("John");        
})
console.log(newArray);


// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const cent = (a) => a**100
cent(2);

// #4) Using your function from #3, put in the parameter 10000. What is the result?
const cent = (a) => a**100
cent(10000); // Infinity (Positive).

// Research for yourself why you get this result
//The reason for the above result is the number has exceeded the upper limit for a number.
//Infinity can be handled using "isFinite()" or "Number.isFinite()" as shown below:

const cent = (a) => {
    const b = a**100;
    let result = '';
    if (isFinite(b)){
        result = b;
    }
    else{
        result = "The result exceeds the upper limit for a number";
    }
    return result;
}

cent(10000);