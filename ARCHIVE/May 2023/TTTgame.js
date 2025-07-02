// Initialize the game
let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameOver = false;

// Get all the cells and the restart button
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restartButton');

// Add event listener to each cell
cells.forEach(cell => {
  cell.addEventListener('click', (e) => {
    // Get the index of the clicked cell
    const index = e.target.getAttribute('id');

    // Check if the cell is already clicked or the game is over
    if (board[index] !== '' || gameOver) return;

    // Update the board and the current player
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    // Check if the current player wins
    if (checkWin(currentPlayer)) {
      gameOver = true;
      alert(`${currentPlayer} wins!`);
      return;
    }

    // Check if it's a tie game
    if (checkTie()) {
      gameOver = true;
      alert("It's a tie!");
      return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
});

// Add event listener to the restart button
restartButton.addEventListener('click', () => {
  // Reset the game
  board = ['','','','','','','','',''];
  currentPlayer = 'X';
  gameOver = false;

  // Reset the board
  cells.forEach(cell => {
    cell.textContent = '';
  });
});

// Check if the current player wins
function checkWin(player) {
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

    for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
    return true;
    }
    }
    return false;
    }
    
    // Check if it's a tie game
    function checkTie() {
    return board.every(cell => cell !== '');
    }