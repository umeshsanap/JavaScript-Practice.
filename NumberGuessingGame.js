let number = 25;
let guessingNumber = prompt("Enter the correct number:-")
while(guessingNumber != number){
    guessingNumber = prompt("You entered wrong number, guess again")
}
console.log("You're Guessed Number is:",guessingNumber)
console.log("You Guess the correct number..!")