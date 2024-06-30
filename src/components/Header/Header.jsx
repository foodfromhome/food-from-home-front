import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/stream">Stream</Link>
            </nav>
        </header>
    );
};

export default Header;
