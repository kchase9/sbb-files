import React from 'react';
import './header.css'; // For styling

const Header = () => {
    return (
        <header className="header">
            <div className="secondary-header">
                <p>Lot 1, La Penitence, Georgetown | 226-8120/23/35</p>
            </div>
            <div className="primary-header">
                <div className="header_logo p-item">
                    <a href="https://sbb.gov.gy/">
                        <img src="src/logo.jpg" alt="Logo" /> {/* fix img */}
                    </a>
                </div>
                <nav className="header_nav p-item">
                    <ul className="header_nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="search p-item">
                    <i className="" aria-hidden="true"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;