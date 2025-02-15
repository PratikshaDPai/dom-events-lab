/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const displayElement = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);

    displayElement.innerText += event.target.innerText;
    // Future logic to capture the button's value would go here...
  });
});

/*-------------------------------- Functions --------------------------------*/

function add(num1, num2) {}
function subtract(num1, num2) {}
function multiply(num1, num2) {}
function divide(num1, num2) {}
function displayOutput() {}
function clear() {}
