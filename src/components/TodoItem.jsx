import React from 'react';

export default function TodoItem({ text }) {
    return (
        <li className="todo-item">{text}</li>
    );
}
