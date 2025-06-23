import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './redux/todosSlice';
import TodoItem from './components/TodoItem';

export default function App() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleAdd = () => {
        if (text.trim().length >= 1) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="app-container">
            <h1 className="app-title">TODO</h1>

            <div className="todo-form">
                <input
                    type="text"
                    className="todo-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Введіть завдання"
                />
                <button
                    onClick={handleAdd}
                    className="todo-button"
                >
                    Додати
                </button>
            </div>

            <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>TODOS</h2>
            <hr style={{ marginBottom: '16px' }} />

            <ul className="todo-list">
                {todos.length > 0 ? (
                    todos.map((todo) => <TodoItem key={todo.id} text={todo.text} />)
                ) : (
                    <li className="todo-item">Список порожній</li>
                )}
            </ul>

            <footer className="todo-footer">
                Загальна кількість: {todos.length}
            </footer>
        </div>
    );
}