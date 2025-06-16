import { Link } from 'react-router-dom'

export default function Header({ toggleTheme }) {
  return (
    <header>
      <nav>
        <Link to="/" style={{ marginLeft: '10px' }}>Головна</Link> | 
        <Link to="/contacts" style={{ marginLeft: '10px' }}>Контакти</Link> | 
        <Link to="/about" style={{ marginLeft: '10px' }}>Про мене</Link>
        <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
          Змінити тему
        </button>
      </nav>
    </header>
  )
}
