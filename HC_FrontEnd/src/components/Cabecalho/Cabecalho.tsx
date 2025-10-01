'use client';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Cabecalho = () => {
    const location = useLocation();
    const [fontSize, setFontSize] = useState(20);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkTheme(true);
        }
    }, []);

    const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 28));
    const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 20));

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const isActive = (path: string) => location.pathname === path;
    const getLinkClassName = (path: string) => `nav-link ${isActive(path) ? 'nav-link-active' : ''}`;

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Link to="/">
                        <img src="/img/logo-hc.png" alt="Logo Hospital das Clínicas" className="header-logo" />
                    </Link>
                    <nav className="nav-desktop">
                        <Link to="/" className={getLinkClassName('/')}>Início</Link>
                        <Link to="/integrantes" className={getLinkClassName('/integrantes')}>Integrantes</Link>
                        <Link to="/faq" className={getLinkClassName('/faq')}>FAQ</Link>
                        <Link to="/contato" className={getLinkClassName('/contato')}>Contato</Link>
                        <Link to="/acessibilidade" className={getLinkClassName('/acessibilidade')}>Acessibilidade</Link>
                    </nav>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} aria-label="Abrir menu"></button>
                </div>
                {isMenuOpen && (
                    <nav className="nav-mobile">
                        <div className="nav-mobile-links">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className={getLinkClassName('/')}>Início</Link>
                            <Link to="/integrantes" onClick={() => setIsMenuOpen(false)} className={getLinkClassName('/integrantes')}>Integrantes</Link>
                            <Link to="/faq" onClick={() => setIsMenuOpen(false)} className={getLinkClassName('/faq')}>FAQ</Link>
                            <Link to="/contato" onClick={() => setIsMenuOpen(false)} className={getLinkClassName('/contato')}>Contato</Link>
                            <Link to="/acessibilidade" onClick={() => setIsMenuOpen(false)} className={getLinkClassName('/acessibilidade')}>Acessibilidade</Link>
                        </div>
                    </nav>
                )}
            </header>
            <div className="accessibility-bar">
                <div className="accessibility-bar-container">
                    <button onClick={increaseFontSize} className="accessibility-button" title="Aumentar fonte">A+</button>
                    <button onClick={decreaseFontSize} className="accessibility-button" title="Diminuir fonte">A-</button>
                    <button onClick={toggleTheme} className="theme-toggle-button" title="Alternar tema">
                        {isDarkTheme ? <FaSun /> : <FaMoon />}
                        <span>{isDarkTheme ? 'Claro' : 'Escuro'}</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cabecalho;