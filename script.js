const turn = document.querySelector("#turn");

const container = document.querySelector(".container");

//Win conditions

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = ["", "", "", "", "", "", "", "", ""];

let current = "x";

function checkWin() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;

    // If any of the spots are empty, skip
    if (board[a] === "" || board[b] === "" || board[c] === "") {
      continue;
    }

    // If all three match, we have a winner
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null; // No winner yet
}

const winning = document.querySelector("#winner");

container.addEventListener("click", function (e) {
  const target = e.target;

  if (target.innerText !== "") return;

  const index = target.dataset.index; //Depending on the element, grab it's assigned index and reassigns JS index
  board[index] = current;
  target.innerText = current;

  const winner = checkWin();

  if (winner){
    winning.classList.toggle('winning-screen');
    winning.classList.remove('invisible');
  }

  if (current === "x") {
    current = "o";
  } else {
    current = "x";
  }

  target.innerText = current;

  if (turn.innerText === "X") {
    turn.innerText = "O";
    turn.classList.add("turn-o");
    turn.classList.remove("turn-x");
  } else {
    turn.innerText = "X";
    turn.classList.add("turn-x");
    turn.classList.remove("turn-o");
  }
});

document.querySelector("#refresh").addEventListener("click", () => {
  location.reload();
});
