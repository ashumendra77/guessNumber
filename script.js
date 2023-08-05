
const secretNumber = Math.floor((Math.random() * 20) + 1)

let score = 20;
let highScore = 0;

const check = document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber);
    // document.querySelector('.message').textContent = 'Too low!'

    if (secretNumber === guessNumber) {
        if (guessNumber > highScore) {
            highScore = guessNumber;
            document.querySelector('.highscore').textContent = highScore

        }
        document.querySelector('.message').textContent = 'WoW! You Won!'
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.body').style.backgroundColor = '#60b347'
        }

    } else if (secretNumber < guessNumber) {
        document.querySelector('.message').textContent = 'Too high!'
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
        }

    } else if (secretNumber > guessNumber) {
        document.querySelector('.message').textContent = 'Too low!'
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
        }

    }
});

 
// document.querySelector('.number').textContent = secretNumber;
// const guessNumber = document.querySelector('.guess').value;
// console.log(guessNumber);

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';

})