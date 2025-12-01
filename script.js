const boxes = document.querySelectorAll(".box");
const para = document.querySelector(".para");

// Symbols
let tick = "✅";
let cross = "❌";

let currentPlayer = tick;
let gameOver = false;

let winningConditions = [
  [0, 1, 2], // first row
  [3, 4, 5], // second row
  [6, 7, 8], // third row
  [0, 3, 6], // first column
  [1, 4, 7], // second column
  [2, 5, 8], // third column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

para.textContent = currentPlayer + "Turn";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver) return;
    if (box.innerHTML === "") {
      box.innerHTML = currentPlayer;
    }

    for (let combo of winningConditions) {
      let [a, b, c] = combo;
      let winnerSybol = "";
      if (
        boxes[a].innerHTML &&
        boxes[a].innerHTML === boxes[b].innerHTML &&
        boxes[a].innerHTML === boxes[c].innerHTML
      ) {
        winnerSybol = boxes[a].innerHTML;
        alert(winnerSybol + "wins!");
        gameOver = true;
        return;
      }
    }
    currentPlayer = currentPlayer === tick ? cross : tick;

    para.textContent = currentPlayer + "Turn";
  });
});
