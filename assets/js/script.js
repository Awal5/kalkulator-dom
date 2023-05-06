const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const displayResult = document.querySelector("#result");
const reset = document.querySelector(".reset");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const double = document.querySelector(".double");
const divide = document.querySelector(".divide");

plus.addEventListener("click", function (e) {
  e.preventDefault();
  const firstValue = parseInt(firstNumber.value);
  const secondValue = parseInt(secondNumber.value);
  const result = firstValue + secondValue;
  displayResult.value = result;
});
minus.addEventListener("click", function (e) {
  e.preventDefault();
  const firstValue = parseInt(firstNumber.value);
  const secondValue = parseInt(secondNumber.value);
  const result = firstValue - secondValue;
  displayResult.value = result;
});
double.addEventListener("click", function (e) {
  e.preventDefault();
  const firstValue = parseInt(firstNumber.value);
  const secondValue = parseInt(secondNumber.value);
  const result = firstValue * secondValue;
  displayResult.value = result;
});
divide.addEventListener("click", function (e) {
  e.preventDefault();
  const firstValue = parseInt(firstNumber.value);
  const secondValue = parseInt(secondNumber.value);
  const result = firstValue / secondValue;
  displayResult.value = result;
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  firstNumber.value = "";
  secondNumber.value = "";
  displayResult.value = "";
});
