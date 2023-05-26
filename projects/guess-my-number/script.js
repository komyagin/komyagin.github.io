'use strict';

const msg = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 20);
numberEl.textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guessInput = Number(guess.value);
    if (!guessInput) {
        msg.textContent = '⛔️ No number';
    } else if (guessInput === secretNumber) {
        msg.textContent = '🏆 Correct Number!';
        if (highScore < score) {
            highScoreEl.textContent = score;
            highScore = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guessInput > secretNumber) {
        msg.textContent = '📈 Too high!';
        score--;
        scoreEl.textContent = score;
    } else if (guessInput < secretNumber) {
        msg.textContent = '📉 Too low!';
        score--;
        scoreEl.textContent = score;
    }
});
