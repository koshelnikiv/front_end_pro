/*
На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
*/

let savedLink = '';

document.getElementById('buttonSet').addEventListener('click', function () {
  const input = prompt('Введіть посилання (URL):');
  if (input) {
    // Додати перевірку, щоб посилання було з http або https
    if (input.startsWith('http://') || input.startsWith('https://')) {
      savedLink = input;
    } else {
      alert('Посилання повинно починатися з http:// або https://');
    }
  }
});

document.getElementById('buttonGo').addEventListener('click', function () {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert('Спочатку введіть посилання!');
  }
});