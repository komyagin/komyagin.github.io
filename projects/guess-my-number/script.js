'use strict';

const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guessInput = Number(guess.value);
    if (!guessInput) {
        displayMessage('⛔️ No number');
    } else if (guessInput === secretNumber) {
        displayMessage('🏆 Correct Number!');
        numberEl.textContent = secretNumber;
        if (highScore < score) {
            highScoreEl.textContent = score;
            highScore = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guessInput !== secretNumber) {
        displayMessage(secretNumber < guessInput ? '📈 Too high!' : '📉 Too low!');
        score--;
        scoreEl.textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...');
    numberEl.textContent = '?';
    guess.value = '';
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    scoreEl.textContent = score;
    document.querySelector('body').style.backgroundColor = '#050505';
    document.querySelector('.number').style.width = '15rem';
});