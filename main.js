let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", Clicksell);
}

let currentPlayer = "X";

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function checkWinner(player) {
  for (let i = 0; i < 4; i++) {
    if (
      cells[i * 4].innerHTML === player &&
      cells[i * 4 + 1].innerHTML === player &&
      cells[i * 4 + 2].innerHTML === player &&
      cells[i * 4 + 3].innerHTML === player
    ) {
      return true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (
      cells[i].innerHTML === player &&
      cells[i + 4].innerHTML === player &&
      cells[i + 8].innerHTML === player &&
      cells[i + 12].innerHTML === player
    ) {
      return true;
    }
  }

  if (
    cells[0].innerHTML === player &&
    cells[5].innerHTML === player &&
    cells[10].innerHTML === player &&
    cells[15].innerHTML === player
  ) {
    return true;
  }

  if (
    cells[3].innerHTML === player &&
    cells[6].innerHTML === player &&
    cells[9].innerHTML === player &&
    cells[12].innerHTML === player
  ) {
    return true;
  }

  return false;
}

function Clicksell() {
  if (this.innerHTML !== "") return;

  this.innerHTML = currentPlayer;

  if (checkWinner(currentPlayer)) {
    alert("Игрок " + currentPlayer + " yengdi!");
    resetBoard();
    return;
  }

  if (checkDraw()) {
    alert("teng!");
    resetBoard();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetBoard() {
  for (let i = 0; i < +cells.length; i++) {
    cells[i].innerHTML = "";
  }
  currentPlayer = "X";
}
