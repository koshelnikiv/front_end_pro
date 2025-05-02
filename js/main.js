const taskInput = document.querySelector('.js--form__input');         // поле вводу
const addTaskBtn = document.querySelector('.form__btn');              // кнопка "Додати"
const todoList = document.querySelector('.js--todos-wrapper');        // список завдань

// --- Збереження у localStorage ---
function saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// --- Завантаження з localStorage ---
function loadFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : null;
}

// --- Зчитування завдань з початкового HTML ---
function extractTasksFromDOM() {
    const items = todoList.querySelectorAll('.todo-item');
    const tasks = [];

    items.forEach(item => {
        const text = item.querySelector('.todo-item__description').textContent.trim();
        const checked = item.querySelector('input[type="checkbox"]').checked;
        tasks.push({ text, checked });
    });

    return tasks;
}

// --- Побудова завдань у DOM ---
function renderTasks() {
    todoList.innerHTML = '';
    const tasks = loadFromLocalStorage();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (task.checked) li.classList.add('todo-item--checked');

        li.innerHTML = `
            <input type="checkbox" ${task.checked ? 'checked' : ''} data-index="${index}">
            <span class="todo-item__description">${task.text}</span>
            <button class="todo-item__delete" data-index="${index}">Видалити</button>
        `;
        todoList.appendChild(li);
    });
}

// --- Додавання нового завдання ---
addTaskBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText) {
        const tasks = loadFromLocalStorage();
        tasks.push({ text: taskText, checked: false });
        saveToLocalStorage(tasks);
        renderTasks();
        taskInput.value = '';
    }
});

// --- Делегування подій: кнопка "Видалити" ---
todoList.addEventListener('click', function (event) {
    const tasks = loadFromLocalStorage();
    const index = event.target.dataset.index;

    if (event.target.classList.contains('todo-item__delete')) {
        tasks.splice(index, 1);
        saveToLocalStorage(tasks);
        renderTasks();
    }
});

// --- Делегування подій: чекбокси ---
todoList.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        const tasks = loadFromLocalStorage();
        const index = event.target.dataset.index;

        tasks[index].checked = event.target.checked;
        saveToLocalStorage(tasks);
        renderTasks(); // перерендер для оновлення класу
    }
});

// --- Початкове завантаження ---
(function init() {
    if (!localStorage.getItem('tasks')) {
        const initialTasks = extractTasksFromDOM(); // зчитати HTML
        saveToLocalStorage(initialTasks);
    }
    renderTasks();
})();