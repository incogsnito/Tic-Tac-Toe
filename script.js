const turn = document.querySelector("#turn");

const container = document.querySelector(".container");

let current = "x";

container.addEventListener("click", function (e) {
  const target = e.target;

  if (target.innerText !== "") return;

  target.innerText = current;

  if (current === "x") {
    current = "o";
    turn.
  } else {
    current = "x";
  }

  if (turn.innerText === "X") {
    turn.innerText = "O";
  } else {
    turn.innerText = "X";
  }
});


