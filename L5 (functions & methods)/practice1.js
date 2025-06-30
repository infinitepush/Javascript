// create a function using "function" keyword that takes a String as argument and returns the numeber of vowels in the string
function countVowels(Str) {
  let count = 0;
  for (i = 0; i < Str.length; i++) {
    if (Str[i] === "a" || Str[i] === "e" || Str[i] === "i" || Str[i] === "o" || Str[i] === "u") {
      count++;
    }
  }
  console.log("Number of vowels in the string are: " + count);
}
console.log("the above same programe using arrwo function::")
const countVow = (Str) => {
    let count = 0;
  for (i = 0; i < Str.length; i++) {
    if (Str[i] === "a" || Str[i] === "e" || Str[i] === "i" || Str[i] === "o" || Str[i] === "u") {
      count++;
    }
  }
  console.log("Number of vowels in the string are: " + count);
}
