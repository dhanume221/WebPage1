import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Navbar = ({ darkText = false }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkText ? 'dark-text' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="container-custom nav-container">
                    <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                        <img src="/ventura_logo.jpg" alt="Ventura" className="nav-logo" />
                    </Link>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
                        <Link to="/properties" onClick={() => setIsMenuOpen(false)}>Properties</Link>
                        <Link to="/ventura-one" onClick={() => setIsMenuOpen(false)}>Ventura One</Link>
                        <Link to="/tier-benefits" onClick={() => setIsMenuOpen(false)}>Tier Benefits</Link>
                        {/* Mobile only action */}
                        <div className="mobile-only" style={{ marginTop: '2rem' }}>
                            <button className="user-btn" onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}>
                                LOGIN
                            </button>
                        </div>
                    </div>

                    <div className="nav-actions">
                        <button className="user-btn desktop-only" onClick={() => setIsLoginOpen(true)}>
                            LOGIN
                        </button>

                        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                            <span className="hamburger"></span>
                        </button>
                    </div>
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
