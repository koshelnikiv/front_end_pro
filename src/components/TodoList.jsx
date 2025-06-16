import './TodoList.css'
import { useState, useEffect } from 'react'
import { Modal, Button, Form, ListGroup } from 'react-bootstrap'

export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    // завантаження з localStorage
    useEffect(() => {
        const stored = localStorage.getItem('tasks')
        if (stored) {
            setTasks(JSON.parse(stored))
        }
    }, [])

    // збереження в localStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleAdd = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        setTasks([...tasks, { text: input, checked: false }])
        setInput('')
    }

    const handleToggle = (index) => {
        const updated = [...tasks]
        updated[index].checked = !updated[index].checked
        setTasks(updated)
    }

    const handleDelete = (index) => {
        const updated = tasks.filter((_, i) => i !== index)
        setTasks(updated)
    }

    const handleShowModal = (task) => {
        setSelectedTask(task)
        setShowModal(true)
    }

    return (
        <div className="todo-container">
            <form onSubmit={handleAdd} className="todo-form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Нове завдання"
                    className="form__input"
                />
                <button type="submit" className="form__btn">Додати</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`todo-item ${task.checked ? 'todo-item--checked' : ''}`}
                    >
                        <div className="d-flex align-items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.checked}
                                onChange={() => handleToggle(index)}
                            />
                            <span
                                className="todo-item__description"
                                onClick={() => handleShowModal(task)}
                            >
                                {task.text}
                            </span>
                        </div>
                        <button
                            className="todo-item__delete"
                            onClick={() => handleDelete(index)}
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ваше завдання</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedTask?.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
