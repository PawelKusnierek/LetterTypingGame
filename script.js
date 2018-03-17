let score = 0;
let pressedLetter;
let isTimerLive = false;
const display = document.querySelector('#number');
const letterOnScreen = document.querySelector('#letterOnScreen');
const arrayOfLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const scoreDisplay = document.querySelector('#scoreDisplay');

onLoad();

function startTimer(display) {
    let timer = 59;
    let seconds;
    isTimerLive = true;

    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        // displayNextLetter();

        if (--timer < 0) {
            timer = 0;
            isTimerLive = false;
        }
    }, 1000)
}


function onLoad() {
    displayNextLetter();
    document.addEventListener('keypress', (event) => {
        let keyName = event.key;
        onKeyPress(keyName);
    })
    // startTimer(display);
    // score = 0;
    //keyListeners and adding keyDown();
}

function onKeyPress(pressedKey) {
    if(!isTimerLive)
    {
        startTimer(display);
    }

    if(pressedKey === letterOnScreen.textContent.toLowerCase())
    {
        successfulKey()
    }
    else
    {
        unSuccessfulKey()
    }
}

function successfulKey() {
    score++;
    scoreDisplay.textContent = score.toString();
    displayNextLetter();
}

function unSuccessfulKey() {
    if(score > 0)
    {
        score--;
        scoreDisplay.textContent = score.toString();
    }
    displayNextLetter();
}

function onTimerEnd() {
    //stop listeners
    //display score? Highscores?
}

function displayNextLetter() {
    let randomNumber = Math.floor(Math.random() * 26);
    letterOnScreen.textContent = arrayOfLetters[randomNumber];
}

function restartGame() {
    //resetTimer, nextLetter, resetScore();
    //reinitiate the listeners
}

function resetTimer() {

}

function resetScore() {

}