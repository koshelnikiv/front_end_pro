"use strict";

$(document).ready(function () {
  const $taskInput = $('.js--form__input');
  const $todoList = $('.js--todos-wrapper');
  function saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function loadFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }
  function renderTasks() {
    $todoList.empty();
    const tasks = loadFromLocalStorage();
    tasks.forEach((task, index) => {
      const checkedClass = task.checked ? 'todo-item--checked' : '';
      const checkedAttr = task.checked ? 'checked' : '';
      const $li = $("\n                <li class=\"todo-item ".concat(checkedClass, "\">\n                    <input type=\"checkbox\" ").concat(checkedAttr, " data-index=\"").concat(index, "\">\n                    <span class=\"todo-item__description\" data-index=\"").concat(index, "\">").concat(task.text, "</span>\n                    <button class=\"todo-item__delete btn btn-sm btn-success\" data-index=\"").concat(index, "\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                </li>\n            "));
      $todoList.append($li);
    });
  }
  $('.form').on('submit', function (e) {
    e.preventDefault();
    const taskText = $taskInput.val().trim();
    if (taskText) {
      const tasks = loadFromLocalStorage();
      tasks.push({
        text: taskText,
        checked: false
      });
      saveToLocalStorage(tasks);
      renderTasks();
      $taskInput.val('');
    }
  });
  $todoList.on('click', '.todo-item__delete', function () {
    const index = $(this).data('index');
    const tasks = loadFromLocalStorage();
    tasks.splice(index, 1);
    saveToLocalStorage(tasks);
    renderTasks();
  });
  $todoList.on('change', 'input[type="checkbox"]', function () {
    const index = $(this).data('index');
    const tasks = loadFromLocalStorage();
    tasks[index].checked = $(this).is(':checked');
    saveToLocalStorage(tasks);
    renderTasks();
  });

  // 👇 Клік по тексту — відкриває модальне вікно
  $todoList.on('click', '.todo-item__description', function () {
    const index = $(this).data('index');
    const tasks = loadFromLocalStorage();
    const taskText = tasks[index].text;
    $('#modal-task-text').text(taskText); // Вставляємо текст завдання
    $('#taskModalLabel').text('Ваше завдання'); // Заголовок
    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
  });

  // Ініціалізація при завантаженні
  (function init() {
    if (!localStorage.getItem('tasks')) {
      const initialTasks = [];
      $('.todo-item').each(function () {
        const text = $(this).find('.todo-item__description').text().trim();
        const checked = $(this).find('input[type="checkbox"]').is(':checked');
        initialTasks.push({
          text,
          checked
        });
      });
      saveToLocalStorage(initialTasks);
    }
    renderTasks();
  })();
});