// Початковий масив чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Створення нового масиву з парними числами
const newNumbers = numbers.filter(num => num % 2 === 0);
console.log('Початковий масив:');
console.log(numbers);
console.log('Лише парні:');
console.log(newNumbers);