//Q1) print all even numbers from 0 to 100
/* for(let i=0; i<=100; i++){
    if(i%2 == 0){
        console.log("Even numbers between 0 to 100 are: ", i);
    }
} */
// Create a game where you start with any random game number. Ask the user to keep guessing the number
// until the user enters the correct number

let guess_key = 22;

for (let guess = 0; ; ) {
    guess = parseInt(prompt("Enter your guessing number: "));

    if (guess === guess_key) {
        console.log("Hooray! You entered the correct number");
        break; // Exit the loop when the correct number is guessed
    } else {
        console.log("Try again!");
    }
}