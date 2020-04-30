const square = document.querySelectorAll(".square");
const cross = (square.innerHTML = '<span class="cross"></span>');
const zero = (square.innerHTML = '<span class="zero"></span>');

let variable = 0;

function winnerCheck() {
  if (
    (square[0].innerHTML == cross &&
      square[4].innerHTML == cross &&
      square[8].innerHTML == cross) ||
    (square[1].innerHTML == cross &&
      square[4].innerHTML == cross &&
      square[7].innerHTML == cross) ||
    (square[2].innerHTML == cross &&
      square[4].innerHTML == cross &&
      square[6].innerHTML == cross) ||
    (square[0].innerHTML == cross &&
      square[1].innerHTML == cross &&
      square[2].innerHTML == cross) ||
    (square[3].innerHTML == cross &&
      square[4].innerHTML == cross &&
      square[5].innerHTML == cross) ||
    (square[6].innerHTML == cross &&
      square[7].innerHTML == cross &&
      square[8].innerHTML == cross) ||
    (square[0].innerHTML == cross &&
      square[3].innerHTML == cross &&
      square[6].innerHTML == cross) ||
    (square[2].innerHTML == cross &&
      square[5].innerHTML == cross &&
      square[8].innerHTML == cross)
  ) {
    alert("X WIN");
    console.log("X WIN");
    location.reload();
  }

  if (
    (square[0].innerHTML == zero &&
      square[4].innerHTML == zero &&
      square[8].innerHTML == zero) ||
    (square[1].innerHTML == zero &&
      square[4].innerHTML == zero &&
      square[7].innerHTML == zero) ||
    (square[2].innerHTML == zero &&
      square[4].innerHTML == zero &&
      square[6].innerHTML == zero) ||
    (square[0].innerHTML == zero &&
      square[1].innerHTML == zero &&
      square[2].innerHTML == zero) ||
    (square[3].innerHTML == zero &&
      square[4].innerHTML == zero &&
      square[5].innerHTML == zero) ||
    (square[6].innerHTML == zero &&
      square[7].innerHTML == zero &&
      square[8].innerHTML == zero) ||
    (square[0].innerHTML == zero &&
      square[3].innerHTML == zero &&
      square[6].innerHTML == zero) ||
    (square[2].innerHTML == zero &&
      square[5].innerHTML == zero &&
      square[8].innerHTML == zero)
  ) {
    alert("0 WIN");
    console.log("0 WIN");
    location.reload();
  }
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    if (square[i].innerHTML == "") {
      if (variable == 0) {
        square[i].insertAdjacentHTML("beforeend", cross);
        variable = 1;
      } else {
        square[i].insertAdjacentHTML("beforeend", zero);
        variable = 0;
      }
    }
    winnerCheck();
  });
}
