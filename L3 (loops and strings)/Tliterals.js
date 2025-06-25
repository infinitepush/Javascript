//template literals are special type of strings
let specialString = `this is a special string`;
console.log(specialString);
// now we are practically seeing how template literals is different from normal string
let student = {
    name : "piyush tiwari",
    cgpa : 9.0,
    isPass : true,
};
console.log("The student name is ", student.name, "the student is passed ", student.isPass);
//instead of writing this much we can use template literals, In template literals we can combile variables 
// for example the above string output can be written as without putting any comma in between
let output = `the name of the student is ${student.name} is passed ${student.isPass}`;
console.log(output);
//to create strings by doing substitution of placeholders is called string interpolation
let str = "piyush tiwari";
let newStr = str.toUpperCase();
console.log(newStr);
// Strings in javascript are immutable
// str.trim = this string method removes empty spaces from our string   