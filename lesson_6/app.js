// ECMAScript
// ES5 - "Old JS"
// ES6+ - "Modern JS"

// <div class="cell"></div>
// function createCell() {
//   const div = document.createElement("div"); // <div></div>
//   div.className = "cell"; // <div class="cell"></div>
//   return div;
// }

// arrow functions
const createCell = () => {
  const div = document.createElement("div"); // <div></div>
  div.className = "cell"; // <div class="cell"></div>
  return div;
};

const $app = document.querySelector("#app");

const cellCount = 260;

for (let i = 0; i < cellCount; i++) {
  const cell = createCell();
  $app.append(cell);
}

// const cells = document.getElementsByClassName("cell");
const cells = $app.querySelectorAll(".cell");

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];
  const randomIndex = Math.round(Math.random() * colors.length) - 1;
  return colors[randomIndex];
}

function setCellColor(event) {
  const cell = event.target;
  cell.style.transition = "";
  cell.style.backgroundColor = getRandomColor();
}

function resetCellColor(event) {
  const cell = event.target;
  cell.style.backgroundColor = "#444";
  cell.style.transition = "2s ease-in-out";
}

for (const cell of cells) {
  cell.addEventListener("mouseenter", setCellColor);
  cell.onmouseleave = resetCellColor;
}

const button = document.querySelector("button");
button.onclick = () => {
    $app.innerHTML = "";
}
