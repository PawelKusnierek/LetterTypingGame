let score = 0;
let screenLetter;
let pressedLetter;
const display = document.querySelector('#number');
onLoad();

function startTimer(display) {
    let timer = 59, seconds;

    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = 60;
        }
    }, 1000)

}


function onLoad() {

    startTimer(display);
    // timer = 60;
    displayNextLetter();
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
    //random letter from predefined array of letters
}

function resetTimer() {

}

function resetScore() {

}