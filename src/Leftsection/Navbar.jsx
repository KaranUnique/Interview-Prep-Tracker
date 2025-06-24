import logo from '../assets/reshot-icon-code-CZ2NMXUGQ8.svg';
import Login from '../login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Leftsidebar.module.css';
function Navbar({onLogin,setActivePage,activePage}) {
    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <img src={logo}></img>
                    <h1>
                        <span style={{ color: 'black' }}>Algo</span>
                        <span style={{ color: '#3b82f6' }}>Base</span>
                    </h1>
                </div>
                <div className="nav-atb">
                    <a>Leader Board</a>
                    <span>|</span>
                    <Link to="/" className={styles.navLink}>Practice Hub</Link>
                    <span>|</span>
                    <a>Event Tracker</a>
                    <span>|</span>
                    <a>Profile Tracker</a>
                    <Link to="/login"><button className="btn">Login</button></Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;