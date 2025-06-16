import { Link } from 'react-router-dom'

export default function Header({ toggleTheme, dark }) {
  return (
    <header>
      <nav>
        <Link to="/" style={{ marginLeft: '16px' }}>Головна</Link> |
        <Link to="/contacts" style={{ marginLeft: '16px' }}>Контакти</Link> |
        <Link to="/about" style={{ marginLeft: '16px' }}>Про мене</Link>
        <button onClick={toggleTheme} className="btn btn-outline-secondary" style={{ marginLeft: '20px' }}>
          {dark ? '☀️ Світла тема' : '🌙 Темна тема'}
        </button>
      </nav>
    </header>
  )
}
