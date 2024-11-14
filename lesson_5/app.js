// DOM - Document Object Model

// DOM Manipulations - операции с DOM
// search
// modify (inner content, styles, classes)
// remove
// create

let $counter = document.getElementById("counter");
let $decreaseButton = document.querySelector("#decrease");
let $resetButton = document.querySelector(".buttons #reset");
let $increaseButton = document.querySelector(".buttons button:nth-child(3)");

// KISS - Keep It Simple and Stupid

// let textStyles = {
//   color: "orange",
//   border: "15px dashed red",
//   padding: "15px 45px",
//   marginBottom: "20px",
// };

// Object.assign($counter.style, textStyles);

// $counter.style.color = "orange";
// $counter.style.border = "15px dashed red";
// $counter.style.padding = "15px 45px";
// $counter.style.marginBottom = "20px";

// function declaration
function increaseCounter() {
  let counter = Number($counter.innerText);
  counter++;
  $counter.innerText = counter;
  setCounterColor();
}
$increaseButton.addEventListener("click", increaseCounter);

// function expression
let resetCounter = function () {
  $counter.innerText = 0;
  setCounterColor();
};
$resetButton.addEventListener("click", resetCounter);

$decreaseButton.onclick = function () {
  let counter = Number($counter.innerText);
  counter--;
  $counter.innerText = counter;
  setCounterColor();
};

function setCounterColor() {
  let counter = $counter.textContent;
  let color;
  if (counter > 0) {
    color = "green";
  } else if (counter < 0) {
    color = "red";
  } else {
    color = "cyan";
  }
  $counter.style.color = color;
}
