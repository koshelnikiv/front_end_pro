import { put, takeEvery, all } from 'redux-saga/effects';
import { types, setTodos } from './actions';

const STORAGE_KEY = 'todos';

// Допоміжна функція
const getTodosFromStorage = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

const saveTodosToStorage = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

function* loadTodosSaga() {
    const todos = getTodosFromStorage();
    yield put(setTodos(todos));
}

function* addTodoSaga(action) {
    const todos = getTodosFromStorage();
    const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
    };
    const updated = [...todos, newTodo];
    saveTodosToStorage(updated);
    yield put({ type: types.LOAD_TODOS });
}

function* deleteTodoSaga(action) {
    const todos = getTodosFromStorage();
    const updated = todos.filter(todo => todo.id !== action.payload);
    saveTodosToStorage(updated);
    yield put({ type: types.LOAD_TODOS });
}

function* toggleTodoSaga(action) {
    const todos = getTodosFromStorage();
    const updated = todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodosToStorage(updated);
    yield put({ type: types.LOAD_TODOS });
}

function* editTodoSaga(action) {
    const { id, newText } = action.payload;
    const todos = getTodosFromStorage();
    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
    );
    saveTodosToStorage(updated);
    yield put({ type: types.LOAD_TODOS });
}

function* clearTodosSaga() {
    saveTodosToStorage([]);
    yield put({ type: types.LOAD_TODOS });
}

export function* rootSaga() {
    yield all([
        takeEvery(types.LOAD_TODOS, loadTodosSaga),
        takeEvery(types.ADD_TODO, addTodoSaga),
        takeEvery(types.DELETE_TODO, deleteTodoSaga),
        takeEvery(types.TOGGLE_TODO, toggleTodoSaga),
        takeEvery(types.EDIT_TODO, editTodoSaga),
        takeEvery(types.CLEAR_TODOS, clearTodosSaga),
    ]);
}
