/*
Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

Покроковий план:

Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
Додайте обробник подій до списку завдань ul, використовуючи делегування.
При кліку на будь-якій кнопці видалення, видаліть цей пункт.
Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.
*/

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('buttonAdd');
const todoList = document.getElementById('todoList');

// Додавання нового завдання
addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="buttonDel">Видалити</button>`;
        todoList.appendChild(li);
        taskInput.value = '';
    }
});

// Делегування подій: обробка кліку на кнопці "Видалити"
todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('buttonDel')) {
        const li = event.target.closest('li');
        if (li) {
            li.remove();
        }
    }
});