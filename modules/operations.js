function operate(operation, opOne, opTwo) {
  switch (operation) {
    case 'add':
      return add(opOne, opTwo);
    case 'subtract':
      return subtract(opOne, opTwo);
    case 'multiply':
      return multiply(opOne, opTwo);
    case 'divide':
      return divide(opOne, opTwo);
  }
}
function add(opOne, opTwo) {
  return opOne + opTwo;
}

function subtract(opOne, opTwo) {
  return opOne - opTwo;
}

function multiply(opOne, opTwo) {
  return opOne*opTwo;
}

function divide(numerator, denominator) {
  if (denominator !== 0) {
    return numerator / denominator;
  }

  return NaN;
}

export { operate };