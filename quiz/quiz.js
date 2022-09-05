// Define Event Listeners and Variables used in function
const start = document.getElementById("quiz-button");
const next = document.getElementById("next-poke");
const runAgain = document.getElementById("retry-poke");
const submit = document.getElementById("submit-answer");
const img = document.getElementById("random-pokemon-img");
const title = document.getElementById("quiz-text");
const score = document.getElementById("pokemon-score");
const redGreenDots = document.getElementById("correct-pokemon-visual")
let correctAnswers = 0;
let questionNumber = 0;
let correctVisual = '';

start.addEventListener("click", startQuiz, {once: true});

function getId() {
    let id;
    let rand = Math.floor(Math.random() * 999);
    if (rand < 800) {
        id = Math.floor(Math.random() * 904);
    } else {
        id = Math.floor(Math.random() * 248) + 10000;
    }
    return id;
}

async function pokeApi() {
    try {
        let obj;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getId()}`);
        obj = await res.json();
        if (obj.sprites.front_default == null) {
            pokeApi()
        } else {
            return obj;
        }
    }
    catch {
        pokeApi();
    }
  }

// Start quiz through button on page
function startQuiz() {
    redGreenDots.innerHTML = ' '
    document.getElementById("poke-home-btn").classList.add('hide');
    runAgain.classList.add('hide');
    let userInput = document.querySelector("input");
    start.classList.add('hide');
    score.classList.remove('hide');
    userInput.classList.remove('hide');
    score.innerHTML = `Correct Answers: ${correctAnswers} / Total Questions: ${questionNumber}`;
    nextQuestion();
}

async function nextQuestion() {
    submit.classList.remove('hide');
    title.innerHTML = `${questionNumber + 1}. Name the Pokemon!`;
    let obj = await pokeApi();
    img.innerHTML = `<img src="${obj.sprites.front_default}" alt="Pokemon Guessing Game Pokemon Image" height="200" width="200">`;
    submit.addEventListener("click", function() {
        check_correctness(obj.name);
    }, {once: true});
}
    
function check_correctness(name) {
    console.log(questionNumber);
    let userInput = document.querySelector("input");
    if (userInput.value.toLowerCase() == name) {
        correctAnswers++;
        questionNumber++;
        correctVisual += '&emsp;🟢&emsp;'
    } else {
        questionNumber++;
        correctVisual += '&emsp;🔴&emsp;'
    }
    redGreenDots.innerHTML = `${correctVisual}`
    score.innerHTML = `Correct Answers: ${correctAnswers} / Total Questions: ${questionNumber}`;
    submit.classList.add('hide');
    next.classList.remove('hide');
    if (questionNumber >= 10) {
        endQuiz();
    } else { next.addEventListener("click", function() {
            nextQuestion();
            next.classList.add('hide');
            userInput.value = "";
        }, {once: true});
    }
}

function endQuiz() {
    let userInput = document.querySelector("input");
    if (correctAnswers == 10) {
        title.innerHTML = `You scored a ${correctAnswers} out of ${questionNumber} questions! Perfect score! We got the next Ketchum on our hands.`;
    } else if (correctAnswers > 6) {
        title.innerHTML = `You scored a ${correctAnswers} out of ${questionNumber} questions...Not too shabby, haven't caught them all but you're close`;
    } else if (correctAnswers > 3) {
        title.innerHTML = `You scored a ${correctAnswers} out of ${questionNumber} questions...You seem like the type that chooses Bulbasaur as their starter...`;
    } else {
        title.innerHTML = `You scored a ${correctAnswers} out of ${questionNumber} questions...Tough...`;
    };
    userInput.value = "";
    next.classList.add('hide');
    document.getElementById("poke-home-btn").classList.remove('hide');
    runAgain.classList.remove('hide');
    runAgain.addEventListener("click", startQuiz, {once: true});
    correctAnswers = 0;
    questionNumber = 0;
}
