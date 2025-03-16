import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // Remove any automatic scroll behavior
    useEffect(() => {
        const handleScroll = (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
        };

        document.addEventListener('click', handleScroll, { passive: false });
        return () => document.removeEventListener('click', handleScroll);
    }, []);

    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;