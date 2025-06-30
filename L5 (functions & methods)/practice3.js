//We are given array of marks of students, filter out marks of student that score 90
let arr = [87, 93, 88, 90];
const Output = arr.filter((val) => {
    return val >= 90;
});
console.log(Output);
console.log("ask the user for the number n");
let n = prompt("Enter the value of n");
let arr1 = [];
for(i = 0; i<n; i++){
    arr1[i] = i+1;
}
console.log(arr1);
console.log("use the reduce method to calculate the sum of all elements in the array");
const Output1 = arr1.reduce((prev, current) => {
    return prev+current;
});
console.log(Output1);
console.log("Use this same to calculate the product of all numbers in the array");
console.log("use the reduce method to calculate the sum of all elements in the array");
const Output2 = arr1.reduce((prev, current) => {
    return prev*current;
});
console.log(Output2);
