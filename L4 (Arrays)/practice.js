// marks of student array : 85, 97, 44, 37, 76, 60
// find the average marks of entire class
let student = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(i = 0 ; i<student.length; i++){
    sum = sum+student[i];  
}
console.log("the average is: "+sum/student.length);