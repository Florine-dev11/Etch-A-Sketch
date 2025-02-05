const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

function createGrid(size) {
  container.innerHTML = ""; // Clear the previous grid

  let squareSize = 960 / size; // Dynamically calculate square size

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Function to reset grid size
resetButton.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Initialize the grid with 16x16 size
createGrid(16);
