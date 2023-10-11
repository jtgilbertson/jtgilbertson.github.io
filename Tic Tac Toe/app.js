const gameBoard = document.querySelector('#game-board')
const infoDisplay = document.querySelector('#info')
const restartButton = document.getElementById("restart-btn")
let startCells = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let go = 'O'
infoDisplay.textContent = 'O goes first.'

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    if (go === 'O') {
        go = 'X'
    } else {
        go = 'O'
    }
    infoDisplay.textContent = "It's " + go + "'s turn now."
    e.target.removeEventListener('click', addGo)
    checkScore()
}

function checkScore() {
    const allSqaures = document.querySelectorAll('.square')
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSqaures[cell].firstChild?.classList.contains('O'))
        
        if (circleWins) {
            infoDisplay.textContent = 'O wins!'
            allSqaures.forEach(square => square.replaceWith(square.cloneNode(true)))
            document.getElementById("restart-btn").style.visibility = "visible";
            return
        }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allSqaures[cell].firstChild?.classList.contains('X'))
        
        if (crossWins) {
            infoDisplay.textContent = 'X wins!'
            allSqaures.forEach(square => square.replaceWith(square.cloneNode(true)))
            document.getElementById("restart-btn").style.visibility = "visible";
            return
        } 
    }) 
}

function restartGame() {
    location.reload()
}