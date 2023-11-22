'use strict';

/* TODO
Build a gues my number with retro style
Guess a number between 20 and 1
Score goes from 20 to 1 (reduces everytime we error)
Store the Higherscore on the section
If the users get's it right, change screen to green
If try again is pressed the users should be able to start again but the highscore stays the same
*/

// COMMENT
// get the random number and variable declaration
let numberToGuess = Math.floor(Math.random() * (20 - 1 + 1) + 1)
let score = 20
let highScore = 0

//NOTE to remove
console.log(numberToGuess)

//function to check if the guess is correct
const checkNumber = function (rand, guess) {
    console.log(`Guess: ${guess}`)
    if (rand === Number(guess)) {
        //NOTE to remove
        console.log('acertou');
        document.body.style.backgroundColor = "green"
        document.querySelector('.number').innerHTML = numberToGuess
        //NOTE to remove
        console.log(`SCORE: ${score}`);
        highScore = highScore < score ? score : highScore
        document.querySelector('.highscore').innerHTML = highScore
        document.querySelector('.message').innerHTML = "🎉 Correct Number!"
        //NOTE to remove
        console.log(`HIGHSCORE: ${highScore}`);
    }
    else {
        if (score > 1) {

            document.querySelector('.message').innerHTML = guess > numberToGuess ? "Try again! To High 📈" : "Try again! To Low 📉"
            score -= 1
            document.querySelector('.score').innerHTML = score
        }
        else {
            document.querySelector('.message').innerHTML = "⛔ You Lose!"
            document.querySelector('score').innerHTML = 0
        }

    }
}

let btnCheck = document.querySelector('.check')
btnCheck.addEventListener("click", function () {
    let guess = document.querySelector('.guess').value
    checkNumber(numberToGuess, guess)
})

let btnAgain = document.querySelector('.again')
btnAgain.addEventListener("click", function () {
    score = 20
    numberToGuess = Math.floor(Math.random() * (20 - 1 + 1) + 1)

    document.querySelector('.message').innerHTML = "Start guessing..."
    document.querySelector('.number').innerHTML = '?'
    document.querySelector('.guess').innerHTML =
        document.querySelector('.score').innerHTML = score

    document.querySelector('body').style.backgroundColor = '#222'

})