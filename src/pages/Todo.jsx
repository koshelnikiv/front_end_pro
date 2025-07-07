import { useEffect, useState } from 'react'
import {
    Box,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Checkbox,
    Typography,
    ListItemSecondaryAction,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
    addTodo,
    deleteTodo,
    editTodo,
    loadTodos,
    toggleTodo,
    clearTodos,
} from '../store/todo/todoActions'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
/*import { clearTodos } from '../store/todo/todoSlice'*/

export default function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    const [text, setText] = useState('')
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    useEffect(() => {
        dispatch(loadTodos())
    }, [dispatch])

    const handleAdd = () => {
        if (text.trim().length < 3) return
        dispatch(addTodo(text))
        setText('')
    }

    const handleEdit = (id, currentText) => {
        setEditId(id)
        setEditText(currentText)
    }

    const handleSaveEdit = () => {
        if (editText.trim().length < 3) return
        dispatch(editTodo(editId, editText))
        setEditId(null)
        setEditText('')
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Список завдань
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                    label="Нове завдання"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" onClick={handleAdd}>
                    Додати
                </Button>
            </Box>

            <List>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        sx={{
                            bgcolor: '#f9f9f9',
                            mb: 1,
                            borderRadius: 2,
                        }}
                        secondaryAction={
                            <ListItemSecondaryAction>
                                {editId === todo.id ? (
                                    <IconButton edge="end" onClick={handleSaveEdit}>
                                        <SaveIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        edge="end"
                                        onClick={() => handleEdit(todo.id, todo.text)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                )}
                                <IconButton
                                    edge="end"
                                    onClick={() => dispatch(deleteTodo(todo.id))}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        }
                    >
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        {editId === todo.id ? (
                            <TextField
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                fullWidth
                            />
                        ) : (
                            <ListItemText
                                primary={todo.text}
                                sx={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                }}
                            />
                        )}
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="error" onClick={() => dispatch(clearTodos())}>
                Очистити TODO
            </Button>
        </Box>
    )
}
