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
let quotesList = [];

// TODO: Add trackers for user inputs and quotes to track cpm and wpm


// Prepare quotes with API
async function getQuotes() {
    try {
        let obj;
        let  randQuote;
        const res = await fetch('https://api.quotable.io/random');
        obj = await res.json();
        randQuote = obj['content']
        return randQuote
    } 
    catch {
        getQuotes()
    }
    
}

// Process user Input
function processUserInput() {
    typeInput.addEventListener("keyup", function(e) {       
        let keyEvent = e.key;
        if (keyEvent == "Enter") {
            typeInput.value = '';

            createSpan()
        }
        return keyEvent;
    }, {once: true});
    let userInput = typeInput.value
    console.log(userInput)
}

// Start Game
function startGame() {
    // Display first quote
    createSpan()
    updateTimer()

}

// Update Clock
function updateTimer() {
    // Countdown and update every second 
    let count = 60;
    let time = setInterval(function() {
        cTimer.innerHTML = `${count--}s`;
        if(count == -1) {
            clearInterval(time);
            endGame()
        }
    }, 1000);
}

// Finish Game / Do calculations
function endGame() {
    // Disable textarea
    typeInput.classList.add('hide')
    // Perform calculations
    cWpm.innerHTML = typeInput.value.split("")

}


// Display "pop-up" to show metrics and funny saying
function displayMetrics() {

}

async function createSpan() {
    let str = await getQuotes()
    let spans = [...str]
    console.log(spans)
    let html = '';
    for(let i = 0; i < spans.length; i++) {
        html += '<span class="quote-char">' + spans[i] + '</span>';
    }
    quote.innerHTML = html
}
