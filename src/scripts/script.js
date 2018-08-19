let score = 0;
let returnIntervalId;
let isTimerLive = false;
const display = document.querySelector('#number');
const letterOnScreen = document.querySelector('#letterOnScreen');
const arrayOfLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const scoreDisplay = document.querySelector('#scoreDisplay');
const refreshButton = document.querySelector('#resetContent');
const finalScore = document.querySelector('#finalScore');

onLoad();

function onLoad() {
    displayNextLetter();
    document.addEventListener('keypress', onKeyPress);
    refreshButton.addEventListener('click', refreshGame);
    scoreDisplay.addEventListener('transitionend', removeTransition);
}

function displayNextLetter() {
    let randomNumber = Math.floor(Math.random() * 26);
    letterOnScreen.textContent = arrayOfLetters[randomNumber];
}

function onKeyPress(event) {
    let keyName = event.key;

    if(!isTimerLive)
    {
        startTimer(display);
    }

    if(keyName === letterOnScreen.textContent.toLowerCase())
    {
        successfulKey()
    }
    else
    {
        unSuccessfulKey()
    }
}

function startTimer(display) {
    let timer = 59;
    let seconds;
    isTimerLive = true;

    returnIntervalId = setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = 0;
            onTimerEnd();
            return '';
        }
    }, 1);
}

function successfulKey() {
    score++;
    scoreDisplay.textContent = score.toString();
    displayNextLetter();
    scoreDisplay.classList.add('green');
}

function unSuccessfulKey() {
    if(score > 0)
    {
        score--;
        scoreDisplay.textContent = score.toString();
    }
    displayNextLetter();
    scoreDisplay.classList.add('red');
}

function onTimerEnd() {
    document.removeEventListener("keypress", onKeyPress);
    clearInterval(returnIntervalId);
    displayScore();
    //query database and if result in top 10 
}

function removeTransition(e) {
    let classList = e.target.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
}

function refreshGame() {
    location.reload();
}

function displayScore() {
    finalScore.textContent = "Your final score: " + score;
}

