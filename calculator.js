// This is a new comment in this repository
function getValues() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  return { a, b };
}
// comment from user 1
function add() {
  const { a, b } = getValues();
  document.getElementById("result").textContent = a + b;
}

function subtract() {
  const { a, b } = getValues();
  document.getElementById("result").textContent = a - b;
}

// New comment
// Comment v2
<<<<<<< HEAD

// This is the local comment
=======
>>>>>>> bcabf6ebe4dd79efc162edcf8c38256e670e9b95
