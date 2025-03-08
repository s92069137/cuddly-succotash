// Get the display element
const display = document.getElementById('display');
let expression = '';  // Variable to store the current expression

// Function to update the display
function updateDisplay(value) {
  display.value = value;
}

// Event listener for number and operator buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.value;

    // Check if the button is a number or operator
    if (buttonValue !== undefined) {
      expression += buttonValue;
      updateDisplay(expression);
    }
  });
});

// Event listener for the Clear button (C)
document.getElementById('clear').addEventListener('click', () => {
  expression = '';
  updateDisplay('');
});

// Event listener for the Backspace/Delete button (⌫)
document.getElementById('delete').addEventListener('click', () => {
  expression = expression.slice(0, -1);  // Remove the last character
  updateDisplay(expression);
});

// Event listener for the Equal button (=)
document.getElementById('equal').addEventListener('click', () => {
  try {
    // Evaluate the expression and update the display
    expression = eval(expression).toString();
    updateDisplay(expression);
  } catch (error) {
    // If an error occurs (e.g., invalid expression), display "Error"
    updateDisplay('Error');
  }
});
