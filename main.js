import { operate } from './modules/operations.js';

const numbers = [
  ['nine', 9],
  ['eight', 8],
  ['seven', 7],
  ['six', 6],
  ['five', 5],
  ['four', 4],
  ['three', 3],
  ['two', 2],
  ['one', 1],
  ['zero', 0],
];

const operations = ['add', 'subtract', 'multiply', 'divide'];

let displayValue = 0;
let workingValue = 0;
let workingOperation = '';
let operating = false;

numbers.map((number) => {
  let button = document.querySelector(`#${number[0]}`);
  button.onclick = () => updateDisplay(number[1]);
});

operations.map((operation) => {
  let button = document.querySelector(`#${operation}`);
  button.onclick = () => {
    workingValue = displayValue;
    workingOperation = operation;
    operating = true;
  };
});

const clear = document.querySelector('#clear');
clear.onclick = () => clearDisplay();

const equals = document.querySelector('#equals');
equals.onclick = () => executeOperation();

const decimal = document.querySelector('#decimal');
decimal.onclick = () => updateDisplay('.');

function updateDisplay(number) {
  const display = document.querySelector('#display');
  console.log(operating);
  if (operating === false) {
    if (display.innerHTML.length < 14) {
      display.innerHTML = `${display.innerHTML}${number}`;
      displayValue = Number(display.innerHTML.toString());
    }
  }
  else {
    display.innerHTML = `${number}`;
    displayValue = number;
    operating = false;
  }
}

function clearDisplay() {
  const display = document.querySelector('#display');
  display.innerHTML = '';
  displayValue = 0;
  workingValue = 0;
  workingOperation = '';
  operating = false;
}

function executeOperation() {
  if (workingOperation !== '') {
    const result = operate(workingOperation, workingValue, displayValue);
    workingOperation = '';
    workingValue = result;
    displayValue = result;
    display.innerHTML = Math.round((result + Number.EPSILON) * 10000) / 10000;
    console.log(workingValue);
    console.log(displayValue);
  }
}
