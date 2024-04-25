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

numbers.map((value) => {
  let button = document.querySelector(`#${value[0]}`);
  button.onclick = () => updateDisplay(value[1]);
});

operations.map((operation) => {
  let button = document.querySelector(`#${operation}`);
  button.onclick = () => {
    if (operating) {
      executeOperation();
    }

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

const negation = document.querySelector('#negation');
negation.onclick = () => negateDisplay(displayValue);

const percent = document.querySelector('#percent');
percent.onclick = () => percentDisplay(displayValue);

function updateDisplay(value) {
  const display = document.querySelector('#display');
  if (operating === false) {
    if (display.innerHTML.length < 14) {
      if (display.innerHTML !== '0') {
        display.innerHTML = `${display.innerHTML}${value}`;
        displayValue = Number(display.innerHTML.toString());
      } else {
        if (value === '.') {
          display.innerHTML = `0${value}`;
          displayValue = 0;
        } else {
          display.innerHTML = `${value}`;
          displayValue = value;
        }
      }
    }
  } else {
    display.innerHTML = `${value}`;
    displayValue = value;
  }
}

function clearDisplay() {
  const display = document.querySelector('#display');
  display.innerHTML = '0';
  displayValue = 0;
  workingValue = 0;
  workingOperation = '';
  operating = false;
}

function executeOperation() {
  if (workingOperation !== '') {
    const result = operate(workingOperation, workingValue, displayValue);
    workingOperation = '';

    const roundedResult = Math.round((result + Number.EPSILON) * 10000) / 10000;
    workingValue = roundedResult;
    displayValue = roundedResult;
    display.innerHTML = roundedResult;
  }
}

function negate(value) {
  if (Math.sign(value) === 1) {
    return -value;
  }

  return Math.abs(value);
}

function negateDisplay(value) {
  const display = document.querySelector('#display');
  const negatedValue = negate(value);
  display.innerHTML = negatedValue;
  displayValue = negatedValue;
}

function percentDisplay(value) {
  const display = document.querySelector('#display');
  const percentageValue = value/100;
  display.innerHTML = percentageValue;
  displayValue = percentageValue;
}
