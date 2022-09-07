const tttGrid = document.getElementById("ttt-box-js");
const startPlayer = document.getElementById("vs-player");
const winnerText = document.getElementById("winning-div");
const retry = document.getElementById("retry-ttt-button")


const winningSquares = [
                        [1, 2, 3], 
                        [4, 5, 6], 
                        [7, 8, 9],
                        [1, 4, 7],
                        [2, 5, 8],
                        [3, 6, 9],
                        [1, 5, 9],
                        [3, 5, 7]
                      ]
let availableSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let usedSquares = []
let usedSquares1 = []
let usedSquares2 = []
let playNumber = 0;

function onePlayerStart() {
    document.querySelector('h1').innerHTML = "FOXR's TicTacToe App" 
    retry.classList.remove('hide');
    tttGrid.classList.remove("hide");
    startPlayer.classList.add('hide');
}

function userChoice(htmlId) {
    let select = document.getElementById(htmlId)
    if (parseInt(htmlId) in usedSquares) {
        return
    } else {
        if ((playNumber % 2) == 0) {
            select.innerHTML = "X";
            select.classList.add("red");
            usedSquares1.push(parseInt(htmlId));
            usedSquares1.sort();
            checkWin(usedSquares1, "Player X")
        } else {
            select.innerHTML = "O";
            select.classList.add("blue");
            usedSquares2.push(parseInt(htmlId));
            usedSquares2.sort();
            checkWin(usedSquares2, "Player O")
        };
        playNumber++;
    };
    usedSquares.push(parseInt(htmlId));
};

function checkWin(squares, player) {
    if (squares.toString().includes(winningSquares[0].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[1].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[2].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[3].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[4].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[5].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[6].toString())) {
        endGame(player)
    } else if (squares.toString().includes(winningSquares[7].toString())) {
        endGame(player)
    } 
}

function endGame(winner) {
    document.querySelector('h1').innerHTML = `Congratulations "${winner}", you won!! Click a start below to try again!`
    tttGrid.classList.add('hide');
}