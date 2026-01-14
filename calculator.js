function getValues() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  return { a, b };
}

function add() {
  const { a, b } = getValues();
  document.getElementById("result").textContent = a + b;
}

function subtract() {
  const { a, b } = getValues();
  document.getElementById("result").textContent = a - b;
}

function multiply() {
  const { a, b } = getValues();
  document.getElementById("result
