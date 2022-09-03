// Define Event Listeners and Variables used in function
const start = document.getElementById("quiz-button");
const next = document.getElementById("poke-next")
const submit = document.getElementById("submit-answer")
const img = document.getElementById("random-pokemon-img");
const userInput = document.querySelector("input");
const title = document.getElementById("quiz-text");
const score = document.getElementById("pokemon-score");
let correctAnswers = 0;
let questionNumber = 0;

start.addEventListener("click", startQuiz);

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 let pokeImg = data.sprites.front_default;
//                 let pokeName = data.name;
//                 img.innerHTML = `<img src="${pokeImg}" alt="Pokemon Guessing Game Pokemon Image">`;
//                 console.log(userInput.value)
//                 console.log(pokeName)
//                 if (userInput.value.toLowerCase() == pokeName.toLowerCase()) {
//                     correctAnswers += 1;
//                 }
//         });

function getId() {
    let id = Math.floor(Math.random() * 1155);
    return id
}

function check_correctness() {
    pass
}

function startQuiz() {
    start.classList.add('hide')
    answer.classList.remove('hide')
    title.innerHTML = `${questionNumber + 1}. Name the Pokemon!`;
    score.classList.remove('hide')
    userInput.classList.remove('hide')
    score.innerHTML = `${correctAnswers}/${questionNumber}`
    nextQuestion()
}

function nextQuestion() {
    questionNumber++
    let id = getId()
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                img.innerHTML = `<img src="${data.sprites.front_default}" alt="Pokemon Guessing Game Pokemon Image">`;
        });
}
    

