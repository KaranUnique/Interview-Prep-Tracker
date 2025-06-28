import logo from '../assets/reshot-icon-code-CZ2NMXUGQ8.svg';
import Login from '../login';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Leftsidebar.module.css';
function Navbar({ onLogoClick }) {

    const location = useLocation();
    return (
        <>
            <nav className="navbar">
                <div className='logo' style={{ cursor: 'pointer' }}>
                    <img src={logo}  onClick={onLogoClick} ></img>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>
                            <span style={{ color: 'black'}}>Algo</span>
                            <span style={{ color: '#3b82f6'}}>Base</span>
                        </h1></Link>

                </div>
                <div className="nav-atb">
                    <a>Leader Board</a>
                    <span>|</span>
                    <Link to="/workspace" className={`${styles.navLink} ${location.pathname === '/workspace' ? styles.practicehub : ''}`}>Practice Hub</Link>
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