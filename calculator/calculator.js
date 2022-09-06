const calcDisplay = document.getElementById("calc-display");
let inputs = [];

function backspace() {
    let previous = calcDisplay.innerHTML;
    calcDisplay.innerHTML = previous.slice(0, -1);
};

function userAddNumber(htmlId) {
    document.addEventListener("keydown", backspace)
    let previous = calcDisplay.innerHTML;
    let input = (document.getElementById(htmlId)).innerHTML;
    if (previous.length <= 10) {
      calcDisplay.innerHTML = `${previous}${input}`;
    }
}

function clearCalc() {
    document.addEventListener("keydown", backspace)
    calcDisplay.innerHTML = "";
    inputs = []
}

function userPerformCalculation(htmlId) {
    document.addEventListener("keydown", backspace)
    inputs.push(calcDisplay.innerHTML);
    inputs.push((document.getElementById(htmlId)).innerHTML);
    calcDisplay.innerHTML = "";
}

function inverseSign() {
    document.removeEventListener("keydown", backspace)
    let num = calcDisplay.innerHTML;
    let answer = (parseFloat(num) * -1)
    if (`${answer}`.length <= 10) {
      calcDisplay.innerHTML = answer;
    } else {
      calcDisplay.innerHTML = answer.toExponential(4);
    }
}

function calculatePercentage() {
    document.removeEventListener("keydown", backspace)
    let num = calcDisplay.innerHTML;
    answer = num / 100
    if (`${answer}`.length <= 10) {
      calcDisplay.innerHTML = answer;
    } else {
      calcDisplay.innerHTML = answer.toExponential(4);
    }
    inputs = []
}

function calcEquals(htmlId) {
    document.removeEventListener("keydown", backspace)
    document.removeEventListener('keydown', (event) => {
      recordNumStroke(event);
    });
    let answer;
    inputs.push(calcDisplay.innerHTML);
    let first = parseFloat(inputs[0]);
    let second = parseFloat(inputs[2]);
    if (inputs[1] == '+') {
      answer = first + second;
    } else if (inputs[1] == '-') {
      answer = first - second;
    } else if (inputs[1] == 'x') {
      answer = first * second;
    } else if (inputs[1] == '÷') {
      answer = first / second;
    }
    if (`${answer}`.length <= 10) {
      calcDisplay.innerHTML = answer;
    } else {
      calcDisplay.innerHTML = answer.toExponential(4);

    }
    inputs = []
}
