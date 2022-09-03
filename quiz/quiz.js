// Define Event Listeners and Variables used in function
const start = document.getElementById("quiz-button");
const next = document.getElementById("next-poke")
const submit = document.getElementById("submit-answer")
const img = document.getElementById("random-pokemon-img");
const title = document.getElementById("quiz-text");
const score = document.getElementById("pokemon-score");
let correctAnswers = 0;
let questionNumber = 0;

start.addEventListener("click", startQuiz);

function getId() {
    let id;
    let rand = Math.floor(Math.random() * 999);
    if (rand < 800) {
        id = Math.floor(Math.random() * 904);
    } else {
        id = Math.floor(Math.random() * 248) + 10000;
    }
    return id
}

async function pokeApi() {
    try {
        let obj;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getId()}`)
        obj = await res.json();
        return obj;
    }
    catch {
        pokeApi()
    }
  }

// Start quiz through button on page
function startQuiz() {
    let userInput = document.querySelector("input");
    start.classList.add('hide')
    title.innerHTML = `Name the Pokemon!`;
    score.classList.remove('hide')
    userInput.classList.remove('hide')
    score.innerHTML = `${correctAnswers}/${questionNumber}`
    nextQuestion()
}

async function nextQuestion() {
    submit.classList.remove('hide')
    title.innerHTML = `Name the Pokemon!`;
    let obj = await pokeApi()
    img.innerHTML = `<img src="${obj.sprites.front_default}" alt="Pokemon Guessing Game Pokemon Image">`;
    console.log(obj.name)
    submit.addEventListener("click", function() {
        check_correctness(obj.name)
    });
}
    
function check_correctness(name) {
    console.log(questionNumber)
    let userInput = document.querySelector("input");
    if (userInput.value.toLowerCase() == name) {
        correctAnswers++
        questionNumber++
        console.log("Correct!")
    } else {
        questionNumber++
        console.log("Incorrect!")
    }
    score.innerHTML = `${correctAnswers}/${questionNumber}`
    submit.classList.add('hide')
    next.classList.remove('hide')
    next.addEventListener("click", function() {
        nextQuestion()
        next.classList.add('hide')
        userInput.value = "";
    });
    
}

function endQuiz() {

}
