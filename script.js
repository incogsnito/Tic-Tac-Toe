const turn = document.querySelector("#turn");

const container = document.querySelector(".container");

let current = "x";

container.addEventListener("click", function (e) {
  const target = e.target;

  if (target.innerText !== "") return;

  target.innerText = current;

  if (current === "x") {
    current = "o";
  } else {
    current = "x";
  }

  if (turn.innerText === "X") {
    turn.innerText = "O";
    turn.classList.add('turn-o');
    turn.classList.remove('turn-x');
  } else {
    turn.innerText = "X";
    turn.classList.add('turn-x');
    turn.classList.remove('turn-o')
  }
});





