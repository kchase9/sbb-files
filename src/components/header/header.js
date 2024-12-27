import React from 'react';
import './header.css'; // For styling
import Logo from '../../logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className="header">
            <div className="secondary-header">
                <p>Lot 1, La Penitence, Georgetown | 226-8120/23/35</p>
            </div>
            <div className="primary-header">
                <div className="header_logo p-item">
                    <a href="https://sbb.gov.gy/">
                        <img src={Logo} alt="Logo" /> {/* fix img */}
                    </a>
                </div>
                <nav className="header_nav p-item">
                    <ul className="header_nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#programmes">Programmes</a></li>
                        <li><a href="#forms">Forms</a></li>
                        <li><a href="#Publications">Publications</a></li>
                        <li><a href="#vacancies">Vacancies</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </nav>
                <div className="search p-item">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </header>
    );
};

export default Header;