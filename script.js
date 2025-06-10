// Handle Button Clicks

// Change background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Show key pressed
function displayKeyPress(event) {
  const paragraph = document.getElementById("keyPressDisplay");
  if (paragraph) {
    paragraph.textContent = `You pressed: ${event.key}`;
  }
}

// Show real-time input
function displayUserInput(event) {
  const paragraph = document.getElementById("textInputDisplay");
  if (paragraph) {
    paragraph.textContent = `You Typed: ${event.target.value}`;
  }
}


const changeButton = document.getElementById("changeColorButton");
const resetButton = document.getElementById("resetColorButton");
const inputField = document.getElementById("textInput");

if (changeButton) {
  changeButton.addEventListener("click", changeBackgroundColor);
}
if (resetButton) {
  resetButton.addEventListener("click", resetBackgroundColor);
}
if (inputField) {
  inputField.addEventListener("input", displayUserInput);
}
document.addEventListener("keydown", displayKeyPress);
