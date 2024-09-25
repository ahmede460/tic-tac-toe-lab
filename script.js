/*-------------------------------- Constants --------------------------------*/
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie


/*------------------------ Cached Element References ------------------------*/

const squareElements = document.querySelectorAll('.sqr')
const messageElement = document.querySelector('#message')
/*-------------------------------- Functions --------------------------------*/
function gameStart() {
    turn = "X"
    winner = false
    messageElement.innerText = `Current Player: ${turn}`
    board = ['', '', '', '', '', '', '', '', '']

    tie = false

}

function render() { }

function updateBoard(event) {
    if (!winner) {
        if (board[event.target.id] == "") {
            board.splice(event.target.id, 1, turn)
            squareElements[event.target.id].innerText = turn
            if (turn === "X") {
                turn = "O"
            }
            else {
                turn = "X"
            }
            messageElement.innerText = `Current Player: ${turn}`
        }
        else {
            messageElement.innerText = `Ops Spot taken\nCurrent Player: ${turn}`
        }

        checkWinner(board)
    }
}


function checkWinner(board) {
    if (board[0] != '') {
        if (board[0] == board[1] && board[0] == board[2]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[0]} Wins!`


        }
        if (board[0] == board[3] && board[0] == board[6]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[0]} Wins!`

        }
        if (board[0] == board[4] && board[0] == board[8]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[0]} Wins!`

        }
    }

    if (board[2] != '') {
        if (board[2] == board[4] && board[2] == board[6]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[2]} Wins!`

        }
        if (board[2] == board[5] && board[2] == board[8]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[2]} Wins!`

        }
    }


    if (board[1] != '') {
        if (board[1] == board[4] && board[1] == board[7]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[1]} Wins!`
        }
    }

    if (board[3] != '') {
        if (board[3] == board[4] && board[3] == board[5]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[3]} Wins!`
        }
    }

    if (board[6] != '') {
        if (board[6] == board[7] && board[6] == board[8]) {
            winner = true
            messageElement.innerText = `Game Over: ${board[3]} Wins!`
        }
    }
}
function reset(){
    winner = false
    board = ['', '', '', '', '', '', '', '', '']
    for(i=0;i< board.length;i++){
        squareElements[i].innerText = ""
    }

}

gameStart()
/*----------------------------- Event Listeners -----------------------------*/
for (const squareElement of squareElements) {
    squareElement.addEventListener('click', updateBoard)
}

document.querySelector("#resetButton").addEventListener('click', reset)

