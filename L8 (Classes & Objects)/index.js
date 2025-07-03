// Protoype in JS:
/* A javascript is an entity having state and behaviour (properties and method).
All js objects have a special property called prototype */
const student = { //direct way of creating object
    name : "piyush",
    marks : 85,
    //we can define methods in objects 
    printMarks: function() {
        console.log("marks : ", this.marks);
    },
};
// In JS this prototype object property is acquired automatically and is the reason why many properties get acquired by an object in js
// prototype ke pass general properties hoti hai jab koi object create hota hai toh woh saari properties automatic uss object ko lag jaati hai
// example array me push aur pop kabhi define nhi krte but woh automatic work karta hai js me
console.log("We can craete our own prototypes also");
//prototype banate kaise hai :: functionname__proto__ //this is used to set a prototype
//aur prototype banane ka matlab hai jo dusra object ka function hai woh ham 1st object me use kr payenge
const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const usingProto = { //nayi object bana liya 
    salary : 50000,
}
// now if we want to use employee as a function in usingProto then we can write it as a prototype
usingProto.__proto__ = employee; // jis func ko use krna chahte hai usko dusri object ka prototype set kr do
//now by doing this in usingproto object we can access the calcTax method of the salary object
// so by doing this we don't need to write the same function again and again for upcoming objects
