// loops is same as for loop, while loop, do while loop
// we will discuss a new loop here for-of loop
/*  for(let val of strVr){  helps in iterating over string and arrays datatypes
      //do something
}
*/
let str = "piyush"
let size = 0;
for(let i of str){ //no initialisation, updation or stopping condition is needed here
 console.log("i= ", i );
 size++;
}
console.log("size of string is: ", size);
// for in loop = this loop is used to iterate over objects and arrays
/* for(let key in objVar){ for in loop returns keys in our objects and their values
    //do something 
    }
*/
let student = {
    name : "piyush tiwari",
    year : 1,
    cgpa : 8.8,
    isEligible : true,
};
for(let key in student ){
    console.log("key is: ", key, "value= ", student[key]);
}
