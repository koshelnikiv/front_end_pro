export const types = {
    LOAD_TODOS: 'LOAD_TODOS',
    SET_TODOS: 'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    CLEAR_TODOS: 'CLEAR_TODOS',
};

export const loadTodos = () => ({ type: types.LOAD_TODOS });
export const setTodos = (todos) => ({ type: types.SET_TODOS, payload: todos });
export const addTodo = (text) => ({ type: types.ADD_TODO, payload: text });
export const deleteTodo = (id) => ({ type: types.DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: types.TOGGLE_TODO, payload: id });
export const editTodo = (id, newText) => ({ type: types.EDIT_TODO, payload: { id, newText } });
export const clearTodos = () => ({ type: types.CLEAR_TODOS });
