import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  });

  const [modalTask, setModalTask] = useState('');

  const validate = (values) => {
    const errors = {};
    if (!values.value) {
      errors.value = 'Обовʼязково';
    } else if (values.value.length < 5) {
      errors.value = 'Мінімум 5 символів';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { value: '' },
    validate,
    onSubmit: (values, { resetForm }) => {
      const newTasks = [...tasks, { text: values.value, checked: false }];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resetForm();
    },
  });

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const toggleChecked = (index) => {
    const updated = [...tasks];
    updated[index].checked = !updated[index].checked;
    updateTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    updateTasks(updated);
  };

  return (
    <div className="container">
      <h1>ToDoList</h1>

      <form onSubmit={formik.handleSubmit} className="form">
        <input
          type="text"
          name="value"
          onChange={formik.handleChange}
          value={formik.values.value}
          className="form__input"
          placeholder="Нове завдання"
        />
        <button type="submit" className="form__btn">Додати</button>
      </form>
      {formik.touched.value && formik.errors.value ? (
        <div style={{ color: 'red', marginBottom: '1rem' }}>{formik.errors.value}</div>
      ) : null}

      <ul className="js--todos-wrapper">
        {tasks.map((task, index) => (
          <li key={index} className={`todo-item ${task.checked ? 'todo-item--checked' : ''}`}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleChecked(index)}
            />
            <span
              className="todo-item__description"
              onClick={() => setModalTask(task.text)}
              data-bs-toggle="modal"
              data-bs-target="#taskModal"
            >
              {task.text}
            </span>
            <button
              className="todo-item__delete btn btn-sm btn-success"
              onClick={() => deleteTask(index)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="taskModalLabel">Ваше завдання</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрити"></button>
            </div>
            <div className="modal-body">{modalTask}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
