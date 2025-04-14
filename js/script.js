// Генеруємо випадкове число від 1 до 9
const randomNumber = Math.floor(Math.random() * 9) + 1;

// Формуємо шлях до зображення
const imagePath = `img/${randomNumber}.jpg`;


const imgElement = document.getElementById("myImg");
imgElement.style.backgroundImage = `url('${imagePath}')`;
