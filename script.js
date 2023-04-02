

/// Create a 16 x 16 grid of square divs ///



const center = document.querySelector(".center");
// Get reset button
const resetBtn = document.querySelector(".grid-creation");

resetBtn.addEventListener('click', restart);

function restart(e) {
  let newSize = prompt("How many squares per side (max 100)?", 16);
  while (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    newSize = prompt("This was not a valid number. Please enter a number between 1 and 100.", 16);
  }
  createNewGrid(newSize);
}

function createNewGrid(size) {
  if (center.firstElementChild) {
    center.firstElementChild.remove();
  }
  let container = createGridContainer();
  container = createGridCells(size, container);
  
}

function createGridContainer() {
  // Create the container
  let container = document.createElement("div");
  container.classList.add("grid");
  center.appendChild(container);
  return container;
}

function createGridCells(size, container) {
  // Create size * size divs and add them to container
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseenter", changeSquareColor);

    square.classList.add("square");
    let squareSize = 100 / size;
    square.style.flex = `1  1 ${squareSize}%`;
    console.log(squareSize);
    container.appendChild(square);
  }
  return container;

}

function changeSquareColor(e) {
  e.currentTarget.style.backgroundColor = "blue";
}

createNewGrid(16);