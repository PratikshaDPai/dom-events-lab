/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const displayElement = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonVal = event.target.innerText;
    // This log is for testing purposes to verify we're getting the correct value
    console.log(buttonVal);
    if (buttonVal === "C") {
      clear();
    } else if (buttonVal === "=") {
      const expression = displayElement.innerText;
      let sum = 0;
      let num = 0; // number after operand
      let prev = 0; // number before operand, needed for PEMDAS
      let operator = "+";
      for (let i = 0; i < expression.length; i++) {
        let digit = +expression[i];
        if (!isNaN(digit)) {
          // if digit then update num
          num = num * 10 + digit;
        }
        if (Number.isNaN(digit) || i === expression.length - 1) {
          // process expression when we reach an operator or the end
          if (operator === "+") {
            sum += prev;
            prev = num;
          } else if (operator === "-") {
            sum += prev;
            prev = -num;
          }
          num = 0;
          operator = expression[i];
        }
      }

      sum += prev;
      displayElement.innerText = sum;
    } else {
      displayElement.innerText += event.target.innerText;
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

function clear() {
  displayElement.innerText = "0";
}
