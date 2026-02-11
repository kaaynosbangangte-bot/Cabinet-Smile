import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/logo.png" alt="Cabinet Dentaire Smile" className="logo-img" />
                </Link>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Accueil</NavLink></li>
                        <li><NavLink to="/apropos" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>A Propos</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
                        <li><NavLink to="/actualites" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Actualités</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contacts</NavLink></li>
                    </ul>
                    <Link to="/appointment" className="mobile-cta" onClick={closeMenu}>Rendez-vous</Link>
                </nav>

                <div className="header-right">
                    <Link to="/appointment" className="header-cta">Prendre un rendez-vous</Link>
                    <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
