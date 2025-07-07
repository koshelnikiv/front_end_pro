import { takeEvery, put, all } from 'redux-saga/effects'
import {
    setTodos,
    addTodoSuccess,
    deleteTodoSuccess,
    toggleTodoSuccess,
    editTodoSuccess,
} from './todoSlice'
import {
    LOAD_TODOS,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    CLEAR_TODOS,
} from './todoActions'

// Utils
const getTodosFromLocalStorage = () =>
    JSON.parse(localStorage.getItem('todos')) || []

const saveTodosToLocalStorage = (todos) =>
    localStorage.setItem('todos', JSON.stringify(todos))

function* loadTodosSaga() {
    const todos = yield getTodosFromLocalStorage()
    yield put(setTodos(todos))
}

function* addTodoSaga(action) {
    const todos = yield getTodosFromLocalStorage()
    const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
    }
    const updated = [...todos, newTodo]
    yield saveTodosToLocalStorage(updated)
    yield put(addTodoSuccess(newTodo))
}

function* deleteTodoSaga(action) {
    const todos = yield getTodosFromLocalStorage()
    const updated = todos.filter((todo) => todo.id !== action.payload)
    yield saveTodosToLocalStorage(updated)
    yield put(deleteTodoSuccess(action.payload))
}

function* toggleTodoSaga(action) {
    const todos = yield getTodosFromLocalStorage()
    const updated = todos.map((todo) =>
        todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
    )
    yield saveTodosToLocalStorage(updated)
    yield put(toggleTodoSuccess(action.payload))
}

function* editTodoSaga(action) {
    const { id, text } = action.payload
    const todos = yield getTodosFromLocalStorage()
    const updated = todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
    )
    yield saveTodosToLocalStorage(updated)
    yield put(editTodoSuccess({ id, text }))
}

function* clearTodosSaga() {
    localStorage.removeItem('todos')
    yield put({ type: 'todo/clearTodos' })  // dispatch action to clear state
}

export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_TODOS, loadTodosSaga),
        takeEvery(ADD_TODO, addTodoSaga),
        takeEvery(DELETE_TODO, deleteTodoSaga),
        takeEvery(TOGGLE_TODO, toggleTodoSaga),
        takeEvery(EDIT_TODO, editTodoSaga),
        takeEvery(CLEAR_TODOS, clearTodosSaga),
    ])
}

