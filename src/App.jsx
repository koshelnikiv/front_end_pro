import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import ErrorBoundary from './ErrorBoundary'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark-theme' : 'light-theme'}>
      <Header toggleTheme={() => setDark(!dark)} dark={dark} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div>Сторінку не знайдено</div>} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}
