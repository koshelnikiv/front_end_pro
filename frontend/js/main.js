$(document).ready(function () {
    const $taskInput = $('.js--form__input');
    const $todoList = $('.js--todos-wrapper');
    const API_URL = 'http://localhost:3000/api/tasks';

    function fetchTasks() {
        return $.get(API_URL);
    }

    function renderTasks() {
        fetchTasks().then(tasks => {
            $todoList.empty();
            tasks.forEach(task => {
                const checkedClass = task.checked ? 'todo-item--checked' : '';
                const checkedAttr = task.checked ? 'checked' : '';

                const $li = $(`
                    <li class="todo-item ${checkedClass}">
                        <input type="checkbox" ${checkedAttr} data-id="${task._id}">
                        <span class="todo-item__description" data-id="${task._id}">${task.text}</span>
                        <button class="todo-item__delete btn btn-sm btn-success" data-id="${task._id}">Видалити</button>
                    </li>
                `);
                $todoList.append($li);
            });
        });
    }

    $('.form').on('submit', function (e) {
        e.preventDefault();
        const taskText = $taskInput.val().trim();
        if (taskText) {
            $.post(API_URL, { text: taskText, checked: false })
                .done(() => {
                    renderTasks();
                    $taskInput.val('');
                });
        }
    });

    $todoList.on('click', '.todo-item__delete', function () {
        const id = $(this).data('id');
        $.ajax({
            url: `${API_URL}/${id}`,
            type: 'DELETE',
            success: renderTasks
        });
    });

    $todoList.on('change', 'input[type="checkbox"]', function () {
        const id = $(this).data('id');
        const checked = $(this).is(':checked');
        $.ajax({
            url: `${API_URL}/${id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ checked }),
            success: renderTasks
        });
    });

    // Модальне вікно
    $todoList.on('click', '.todo-item__description', function () {
        const id = $(this).data('id');
        $.get(`${API_URL}/${id}`, function (task) {
            $('#modal-task-text').text(task.text);
            $('#taskModalLabel').text('Ваше завдання');
            const modal = new bootstrap.Modal(document.getElementById('taskModal'));
            modal.show();
        });
    });

    renderTasks();
});