// https://api.quotable.io/random quote API

// Define Variables and Elements
const cWpm = document.getElementById('curr-wpm');
const cCpm = document.getElementById('curr-cpm');
const cTimer = document.getElementById('curr-timer');
const cErrors = document.getElementById('curr-errors');
const cAccuracy = document.getElementById('curr-acc');
const quote = document.getElementById('quote');
const typeInput = document.getElementById('speed-input');
const typeRestart = document.getElementById('speed-restart');

const url = 'https://api.quotable.io/random'

// Prepare quotes with API limit as 20
async function getQuotes() {
    try {
        let obj;
        const res = await fetch(url);
        obj = await res.json()
        console.log(obj)
    }
    catch {
        getQuotes()
    }
}

// Process user Input

// Start Game

// Update Clock

// Finish Game / Do calculations

// Display "pop-up" to show metrics and funny saying