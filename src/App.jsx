import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Swapi from './pages/Swapi'
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#10b981', // Emerald
        },
        secondary: {
            main: '#f43f5e',
        },
    },
})


export default function App() {
    return (
        <Router>
            <Header />
            <Container sx={{ mt: 4, mb: 4, minHeight: '80vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/swapi" element={<Swapi />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}
