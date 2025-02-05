const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

function createGrid(size) {
  container.innerHTML = ""; // Clear previous grid

  let squareSize = 960 / size; // Dynamically calculate square size

  for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.opacity = "1"; // Default full visibility

      // Add hover effect with random color and darkening effect
      square.addEventListener("mouseover", () => {
          let currentOpacity = parseFloat(square.style.opacity); // Get current opacity
          if (currentOpacity > 0) {
              square.style.opacity = currentOpacity - 0.1; // Reduce opacity by 10%
          }

          // Generate a random RGB color
          let randomRed = Math.floor(Math.random() * 256);
          let randomGreen = Math.floor(Math.random() * 256);
          let randomBlue = Math.floor(Math.random() * 256);

          square.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
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
