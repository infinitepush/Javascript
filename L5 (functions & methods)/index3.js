// some more array methods that are useful
// 1) MAP METHOD
console.log("We will discuss the MAP method here");
console.log("It is similar to for each method");
console.log("Map ko use kiya jata hai ek ek value pe jaake ek ek operation perform krne ke liye");
console.log("Difference yeh hota hai ki map hame ek naya array return krke deta hai jo for each nhi krta");
let nums = [67, 32, 59];
let newArr = nums.map((val) => {
    return val*val; 
})
 console.log(newArr);
 console.log("map is used to create a new array using some return value based on each value stored on individual vertices");
// 2) Filter Method
console.log("We will discuss the filter method here");
console.log("Filter method is used to filter out some array elements by checking on each indices based on some conditions");
//eg filter even elements
console.log("below is a filter out array method to filter even elements");
let arr = [1,2,3,4,5,6,7,8];
let evenArr = arr.filter((val) =>{
    return val%2 === 0;
});
console.log(evenArr);   
// 3) Reduce Method
console.log("we will discuss the Reducec Method here");
console.log("performs some operation & reduces the array to a single value. It returns that single value.");
console.log("a program that uses reduce method to print the sum of an array");
let arr1 = [1,2,3,4];
const output = arr1.reduce((result, current) => {
    return (result+current);
});
console.log(output);    
console.log("A program to find the largest number in an array");
let arr3 = [1,2,3, 5,4 ];
const Output1 = arr3.reduce((prev, current) => {
    return prev > current ? prev : current;
});
console.log(Output1);