const textBlock = document.getElementById('textColor');
const button = document.getElementById('btnChangeColor');

let isColored = false;

button.addEventListener('click', () => {
  if (isColored) {
    textBlock.style.color = 'black'; // Повертаємо початковий
  } else {
    textBlock.style.color = 'red'; // Або будь-який інший
  }
  isColored = !isColored; // Перемикаємо стан
});