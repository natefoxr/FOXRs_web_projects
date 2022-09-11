// https://api.quotable.io/random quote API

// Define Variables and Elements
const cWpm = document.getElementById('curr-wpm');
const cCpm = document.getElementById('curr-cpm');
const cTimer = document.getElementById('curr-timer');
const cErrors = document.getElementById('curr-errors');
const cAccuracy = document.getElementById('curr-acc');
const typeInput = document.getElementById('speed-input');
const typeRestart = document.getElementById('speed-restart');
const quote = document.getElementById('quote');
let userTypedQuotes = [];
let userTypedChars = [];
let quotesList = [];

// TODO: Add trackers for user inputs and quotes to track cpm and wpm
// TODO: Add classes if user input is incorrect


// Prepare quotes with API
async function getQuotes() {
    try {
        let obj;
        let  randQuote;
        const res = await fetch('https://api.quotable.io/random?maxLength=150');
        obj = await res.json();
        randQuote = obj['content'];
        return randQuote;
    } 
    catch {
        getQuotes();
    }
    
}

// Process user Input
function processUserInput() {
    typeInput.addEventListener("keyup", function(e) {       
        let keyEvent = e.key;
        if (keyEvent == "Enter") {
            let words = typeInput.value.split(" ");
            for(i in words) {
                // words[i].trim()
                userTypedQuotes.push(words[i].trim());
            }
            let chars = typeInput.value
            for(i in chars) {
                // words[i].trim()
                userTypedChars.push(chars[i].trim());
            }
            typeInput.value = '';
            createSpan();
        }
        return keyEvent;
    }, {once: true});
    let userInput = typeInput.value;
    console.log(userInput);
}

// Start Game
function startGame() {
    // Display first quote
    createSpan();
    updateTimer();
    typeInput.removeEventListener("click", startGame)
}

// Update Clock
function updateTimer() {
    // Countdown and update every second 
    let count = 60;
    let time = setInterval(function() {
        let words = typeInput.value.split(" ");
        cTimer.innerHTML = `${count--}s`;
        if(count == -1) {
            clearInterval(time);
            for(i in words) {
                // words[i].trim()
                userTypedQuotes.push(words[i].trim());
            }
            endGame()
        }
    }, 1000);
}

// Finish Game / Do calculations
function endGame() {
    // Disable textarea
    typeInput.classList.add('hide');
    // Perform calculations
    displayMetrics()
    console.log("Game Over");
}


// Display "pop-up" to show metrics and funny saying
function displayMetrics() {
    let words = typeInput.value.split(" ");
    for(i in words) {
        // words[i].trim()
        userTypedQuotes.push(words[i].trim());
    }
    let chars = typeInput.value
    for(i in chars) {
        // words[i].trim()
        userTypedChars.push(chars[i].trim());
    }
    cWpm.innerHTML = userTypedQuotes.length;
    cCpm.innerHTML = userTypedQuotes.length;

}

async function createSpan() {
    let str = await getQuotes();
    let spans = [...str];
    console.log(spans);
    let html = '';
    for(let i = 0; i < spans.length; i++) {
        html += '<span class="quote-char">' + spans[i] + '</span>';
    }
    quote.innerHTML = html;
}

typeInput.addEventListener("click", startGame);
