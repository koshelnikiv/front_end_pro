import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const navItems = [
    { label: 'Головна', path: '/' },
    { label: 'TODO', path: '/todo' },
    { label: 'SWAPI', path: '/swapi' },
]

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Сайт-резюме
                </Typography>
                {navItems.map((item) => (
                    <Button
                        key={item.path}
                        color="inherit"
                        component={NavLink}
                        to={item.path}
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#f7df1eaa',
                            fontWeight: isActive ? 'bold' : 'bold',
                            textDecoration: 'none',
                        })}
                    >
                        {item.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    )
}
