// src/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="mb-0">CRUD</h1>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
