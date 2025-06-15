// Create animated background
function createBackgroundElements() {
    const container = document.getElementById('backgroundElements');
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 100 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 15;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.top = `${top}%`;
        bubble.style.animationDelay = `${delay}s`;
        container.appendChild(bubble);
    }
    for (let i = 0; i < 10; i++) {
        const pulse = document.createElement('div');
        pulse.classList.add('pulse');
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 4;
        pulse.style.left = `${left}%`;
        pulse.style.top = `${top}%`;
        pulse.style.animationDelay = `${delay}s`;
        container.appendChild(pulse);
    }
    for (let i = 0; i < 5; i++) {
        const beam = document.createElement('div');
        beam.classList.add('light-beam');
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        beam.style.left = `${left}%`;
        beam.style.animationDelay = `${delay}s`;
        container.appendChild(beam);
    }
}
// Game state
const gameState = {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    gameActive: true,
    scores: {
        X: 0,
        O: 0,
        draws: 0,
        games: 0
    },
    animationType: 'drop'
};
// DOM Elements
const gameBoard = document.getElementById('gameBoard');
const statusMessage = document.getElementById('statusMessage');
const playerXCard = document.getElementById('playerXCard');
const playerOCard = document.getElementById('playerOCard');
const playerXWins = document.getElementById('playerXWins');
const playerOWins = document.getElementById('playerOWins');
const gamesPlayed = document.getElementById('gamesPlayed');
const xWins = document.getElementById('xWins');
const oWins = document.getElementById('oWins');
const draws = document.getElementById('draws');
const historyList = document.getElementById('historyList');
const newGameBtn = document.getElementById('newGameBtn');
const resetBtn = document.getElementById('resetBtn');
// Initialize game board
function initBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('option');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        const symbol = document.createElement('div');
        symbol.classList.add('symbol');
        symbol.setAttribute('data-symbol', '');
        cell.appendChild(symbol);
        gameBoard.appendChild(cell);
    }
}
// Handle cell click
function handleCellClick(index) {
    if (!gameState.gameActive || gameState.board[index] !== '') return;
    gameState.board[index] = gameState.currentPlayer;
    updateBoard();
    const result = checkGameResult();
    if (result) {
        handleGameResult(result);
    } else {
        gameState.animationType = gameState.animationType === 'drop' ? 'grow' : 'drop';
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
        updatePlayerCards();
    }
}
// Update board display
function updateBoard() {
    const cells = document.querySelectorAll('.option');
    cells.forEach((cell, index) => {
        const symbol = cell.querySelector('.symbol');
        if (gameState.board[index]) {
            symbol.innerHTML = '';
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svg.setAttribute('viewBox', '0 0 100 100');
            svg.classList.add('symbol-svg');
            if (gameState.board[index] === 'X') {
                const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path1.setAttribute('d', 'M10,10 L90,90');
                path1.setAttribute('fill', 'none');
                path1.setAttribute('stroke-linecap', 'round');
                const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path2.setAttribute('d', 'M90,10 L10,90');
                path2.setAttribute('fill', 'none');
                path2.setAttribute('stroke-linecap', 'round');
                svg.appendChild(path1);
                svg.appendChild(path2);
            } else {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', '50');
                circle.setAttribute('cy', '50');
                circle.setAttribute('r', '40');
                circle.setAttribute('fill', 'none');
                svg.appendChild(circle);
            }
            symbol.appendChild(svg);
            if (gameState.animationType === 'drop') {
                symbol.classList.add('symbol-drop');
            } else {
                symbol.classList.add('symbol-grow');
            }
            setTimeout(() => {
                symbol.classList.remove('symbol-drop', 'symbol-grow');
            }, 800);
        } else {
            symbol.innerHTML = '';
        }
    });
}
// Check game result
function checkGameResult() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameState.board[a] &&
            gameState.board[a] === gameState.board[b] &&
            gameState.board[a] === gameState.board[c]) {
            return { winner: gameState.board[a], winningCells: pattern };
        }
    }
    if (!gameState.board.includes('')) {
        return { winner: 'draw' };
    }
    return null;
}
// Handle game result
function handleGameResult(result) {
    gameState.gameActive = false;
    gameState.scores.games++;
    statusMessage.classList.remove('win-animation', 'draw-animation');
    if (result.winner === 'draw') {
        statusMessage.textContent = "It's a Draw!";
        statusMessage.classList.add('draw-animation');
        gameState.scores.draws++;
    } else {
        statusMessage.textContent = `Player ${result.winner} Wins!`;
        statusMessage.classList.add('win-animation');
        gameState.scores[result.winner]++;
        result.winningCells.forEach(index => {
            const cell = document.querySelector(`.option[data-index="${index}"]`);
            cell.classList.add('winning-cell');
        });
    }
    const historyEntry = document.createElement('div');
    historyEntry.classList.add('history-item');
    historyEntry.textContent = result.winner === 'draw' ?
        `Game ${gameState.scores.games}: Draw` :
        `Game ${gameState.scores.games}: Player ${result.winner} won`;
    historyList.insertBefore(historyEntry, historyList.firstChild);
    updateScores();
}
// Update status message
function updateStatus() {
    statusMessage.textContent = `Player ${gameState.currentPlayer}'s Turn`;
    statusMessage.classList.remove('win-animation', 'draw-animation');
}
// Update player cards
function updatePlayerCards() {
    playerXCard.classList.toggle('active', gameState.currentPlayer === 'X');
    playerOCard.classList.toggle('active', gameState.currentPlayer === 'O');
}
// Update scoreboard
function updateScores() {
    playerXWins.textContent = gameState.scores.X;
    playerOWins.textContent = gameState.scores.O;
    gamesPlayed.textContent = gameState.scores.games;
    xWins.textContent = gameState.scores.X;
    oWins.textContent = gameState.scores.O;
    draws.textContent = gameState.scores.draws;
}
// Reset current game
function resetGame() {
    gameState.board = Array(9).fill('');
    gameState.currentPlayer = 'X';
    gameState.gameActive = true;
    const cells = document.querySelectorAll('.option');
    cells.forEach(cell => {
        cell.classList.remove('winning-cell');
        const symbol = cell.querySelector('.symbol');
        symbol.innerHTML = '';
    });
    statusMessage.classList.remove('win-animation', 'draw-animation');
    updateStatus();
    updatePlayerCards();
}
// Reset all scores
function resetScores() {
    gameState.scores = {
        X: 0,
        O: 0,
        draws: 0,
        games: 0
    };
    historyList.innerHTML = '';
    updateScores();
    resetGame();
    statusMessage.textContent = "Scores Reset!";
    statusMessage.classList.add('win-animation');
    setTimeout(() => {
        updateStatus();
    }, 2000);
}
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetScores);
createBackgroundElements();
initBoard();
updateScores();
updatePlayerCards();
