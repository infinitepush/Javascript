//Q1) get user to input a number using prompt ("Enter a number"). check if is multiple of 5 or not
/*let name = prompt("hello");
console.log(name);*/
//prompt is a way of taking input from the user
let num = prompt("enter a number: ");
if(num % 5 === 0){
    console.log("num is a multiple of 5");
}
else{
    console.log("num is not a multiple of 5");
}

// Q2) Write  a code which can give grade to students according to their scores 
let marks = prompt("Enter the marks of the student: ");
if(marks>=80 && marks<=100){
    console.log("Grade A");
}else if(marks>=70 && marks<=89){
    console.log("Grade B");
}
else if(marks>=60 && marks<=69){
    console.log("Grade C");
}
else if(marks>=50 && marks<=59){
    console.log("Grade D");
}else{
    console.log("Grade F");
}