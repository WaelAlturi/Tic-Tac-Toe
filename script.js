const cells = document.querySelectorAll(".cell");
const restart = document.querySelector(".restart");
const statusText = document.querySelector(".status");
let roundWin = false;
const condtions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentTurn = "X";
statusText.textContent = currentTurn + " Turn`s";

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClikced));
  restart.addEventListener("click", restartTheGame);
}
function cellClikced() {
  if (!roundWin) {
    if (this.textContent == "") {
      this.textContent = currentTurn;
      currentTurn = currentTurn === "X" ? "O" : "X";
      statusText.textContent = currentTurn + " Turn`s";
      checkCondtions(this);
    }
  }
}
function restartTheGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentTurn = "X";
  statusText.textContent = currentTurn + " Turn`s";
  roundWin = false;
}
function checkCondtions(cell) {
  for (let condition of condtions) {
    const [a, b, c] = condition;
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent &&
      cells[a].textContent !== ""
    ) {
      statusText.textContent = cell.textContent + " wins!";
      roundWin = true;
      break;
    }
  }
  if (Array.from(cells).every((cell) => cell.textContent !== "")) {
    statusText.textContent = "It's a draw!";
  }
}
initializeGame();
