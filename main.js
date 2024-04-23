import { operate } from './modules/operations.js';

const numbers = [['nine', 9], ['eight', 8], ['seven', 7], ['six', 6], ['five', 5], ['four', 4], ['three', 3], ['two', 2], ['one', 1], ['zero', 0]];

numbers.map((number) => {
  let button = document.querySelector(`#${number[0]}`);
  button.onclick = () => updateDisplay(number[1]);
  }
);

function updateDisplay(number) {
  const display = document.querySelector('#display');
  display.innerHTML = `${display.innerHTML}${number}`;
}