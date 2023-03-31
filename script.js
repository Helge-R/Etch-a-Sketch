

/// Create a 16 x 16 grid of square divs ///

// Get the container
const container = document.querySelector(".container");

// Create 16 divs and add them to container
for (let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}