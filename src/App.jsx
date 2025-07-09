import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadTodos, addTodo, deleteTodo,
    toggleTodo, editTodo, clearTodos,
} from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    const handleAdd = () => {
        if (text.trim().length >= 3) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center">TODO</h2>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введіть задачу"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAdd}>
                    Додати
                </button>
            </div>

            <ul className="list-group">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div className="form-check" style={{ flexGrow: 1 }}>
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                                id={`todo-${todo.id}`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`todo-${todo.id}`}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {todo.text}
                            </label>
                        </div>

                        <div className="btn-group">
                            <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => {
                                    const newText = prompt('Нове значення:', todo.text);
                                    if (newText && newText.length >= 3)
                                        dispatch(editTodo(todo.id, newText));
                                }}
                            >
                                Редагувати
                            </button>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                Видалити
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <footer className="mb-3 mt-3">
                <span className="me-3">Загальна кількість: {todos.length}</span>
                <button className="btn btn-danger" onClick={() => dispatch(clearTodos())}>
                    Очистити все
                </button>
            </footer>
        </div>
    );
}
