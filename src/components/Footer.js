import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p>&copy; 2025 Pieter Bijl. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;