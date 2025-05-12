/*
Реалізувати таймер відліку:

1. Початок таймера визначати із змінної
2. Відобразити на сторінці час у форматі 01:25
3. Коли закінчився таймер зупинити його
*/

// Початковий час у секундах (наприклад, 1 хвилина 25 секунд = 85 секунд)
let startTimeInSeconds = 85;

// Знаходимо елемент, у якому будемо відображати час
const timerElement = document.getElementById('timer');

/**
 * Функція для форматування часу у вигляді MM:SS
 * @param {number} seconds - кількість секунд
 * @returns {string} - форматований рядок часу
 */
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60); // обчислюємо хвилини
  const secs = seconds % 60; // залишок — це секунди
  // Повертаємо строку у форматі 01:25, доповнюючи нулями
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Функція запуску таймера зворотного відліку
 * @param {number} seconds - кількість секунд для відліку
 */
function startCountdown(seconds) {
  let remainingTime = seconds;

  // Відображаємо початковий час одразу
  timerElement.textContent = formatTime(remainingTime);

  // Створюємо інтервал, який оновлюється щосекунди
  const interval = setInterval(() => {
    remainingTime--; // зменшуємо час на 1 секунду

    // Оновлюємо відображення на сторінці
    timerElement.textContent = formatTime(remainingTime);

    // Якщо час вийшов — зупиняємо інтервал і встановлюємо 00:00
    if (remainingTime <= 0) {
      clearInterval(interval);
      timerElement.textContent = '00:00';
    }
  }, 1000); // інтервал 1 секунда
}

// Запускаємо таймер
startCountdown(startTimeInSeconds);