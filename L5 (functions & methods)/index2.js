console.log(
  "functios in js also act as variables i..e, can be passed from anywhere and also return"
);
console.log(
  "A callback is a function that can be passed as an argument is called a Callback function"
);
let arr = ["delhi", "mumbai", "jaipur"];
arr.forEach((val, index, arr) => {
  console.log(val.toUpperCase(), index, arr );
});
console.log("for each is only used for arrays and not from string")
console.log("Interview: What are higher order functions/methods?");
console.log("For each loops are called higher order functions as they use different other functions as parameters, or returns these functions");

 