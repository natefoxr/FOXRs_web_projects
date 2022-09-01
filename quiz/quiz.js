button = document.getElementById("quiz-button");
img = document.getElementById("random-pokemon-img");
userInput = document.querySelector("input");
title = document.getElementById("quiz-text");
score = document.getElementById("pokemon-score")
button.addEventListener("click", startQuiz);
let correctAnswers = 0
let questionNumber = 0

function startQuiz() {
    try{
        button.innerHTML = 'Next';
        title.innerHTML = `${questionNumber}. Name the Pokemon!`;
        score.classList.remove('hide')
        userInput.classList.remove('hide')
        score.innerHTML = `${correctAnswers}/${questionNumber}`
        if (questionNumber < 11) {
            let id = Math.floor(Math.random() * 1155);
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    pokeImg = data.sprites.front_default;
                    pokeName = data.name;
                    img.innerHTML = `<img src="${pokeImg}" alt="Pokemon Guessing Game Pokemon Image">`;
                    if (userInput.value.toLowerCase() == pokeName.toLowerCase()) {
                        correctAnswers += 1;
                    }
            });
        };
    }
    catch {
        startQuiz()
    }
    questionNumber += 1
};
    
