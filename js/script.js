/*
Пишемо свій слайдер зображень, який повинен:

Відображати зображення та кнопки Next, Prev з боків від зображення.
При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє
При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
Кількість слайдів може бути будь-якою
Додати можливість навігації через точки під слайдами
*/

const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

/* Зміна відображення слайду */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  // Показуємо або ховаємо кнопку "Prev" на першому слайді
  prevBtn.style.display = index === 0 ? 'none' : 'block';
  // Показуємо або ховаємо кнопку "Next" на останньому слайді  
  nextBtn.style.display = index === slides.length - 1 ? 'none' : 'block';
}

/* Створюємо точки навігації */
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    // Клік на точку переходить до відповідного слайду
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

// Обробник натискання кнопки "Prev"
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

// Обробник натискання кнопки "Next"
nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Ініціалізуємо слайдер (показуємо перший слайд)
createDots();
showSlide(currentSlide);