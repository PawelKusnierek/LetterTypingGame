let score = 0;
let pressedLetter;
let isTimerLive;
const display = document.querySelector('#number');
const letterOnScreen = document.querySelector('#letterOnScreen');
const arrayOfLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

onLoad();

function startTimer(display) {
    let timer = 59;
    let seconds;
    isTimerLive = true;

    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        displayNextLetter();

        if (--timer < 0) {
            timer = 0;
            isTimerLive = false;
        }
    }, 1000)
}


function onLoad() {
    startTimer(display);

    // score = 0;
    //keyListeners and adding keyDown();
}

function onKeyDown() {
    //compare screenLetter to pressedLetter
    //based on outcome either successfulKey or unSuccessfulKey
}

function successfulKey() {
    //add 1 to score
}

function unSuccessfulKey() {
    //subtract 1 if score > 0
}

function restartGame() {
    //resetTimer, nextLetter, resetScore();
    //reinitiate the listeners
}

function onTimerEnd() {
    //stop listeners
    //display score? Highscores?
}

function displayNextLetter() {
    let randomNumber = Math.floor(Math.random() * 26);
    letterOnScreen.textContent = arrayOfLetters[randomNumber];
}

function resetTimer() {

}

function resetScore() {

}