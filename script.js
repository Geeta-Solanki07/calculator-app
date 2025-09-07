const inputBox = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      expression = "";
      inputBox.value = "0";
    } 
    else if (value === "DEL") {
      expression = expression.slice(0, -1);
      inputBox.value = expression || "0";
    } 
    else if (value === "=") {
      try {
        expression = eval(expression).toString();
        inputBox.value = expression;
      } catch {
        inputBox.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      inputBox.value = expression;
    }
  });
});
