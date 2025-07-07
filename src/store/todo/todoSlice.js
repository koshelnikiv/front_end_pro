import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    loading: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        addTodoSuccess: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodoSuccess: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodoSuccess: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        editTodoSuccess: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((t) => t.id === id)
            if (todo) {
                todo.text = text
            }
        },
        clearTodos: (state) => {
            state.todos = []
        },
    },
})

export const {
    setTodos,
    addTodoSuccess,
    deleteTodoSuccess,
    toggleTodoSuccess,
    editTodoSuccess,
    clearTodos,
} = todoSlice.actions

export default todoSlice.reducer
