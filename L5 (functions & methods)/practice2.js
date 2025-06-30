//for a given array of numbers, print the square of each value using the for each loop
let arr = [10, 20, 30, 40];

console.log("learn about other array method that are used frequently");
console.log("Anothe method for writing the call back function:");
let arrr = [10, 20, 30, 40];
let calSqr = ((num)=>{
    console.log("square is: "+num*num);
})
arr.forEach(calSqr); // we can pass this calc square over here also 
console.log("so by this way we do call backs, that is in call backs we just pass our function,");
console.log(" wo ek variable bhi ho sakta hai jisme kisi function ki deffination bhi likhi ho");