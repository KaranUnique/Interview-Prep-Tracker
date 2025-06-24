import logo from '../assets/reshot-icon-code-CZ2NMXUGQ8.svg';
import Login from '../login';
import { useState } from 'react';
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
                    <a onClick={() => setActivePage("workspace")}
                    className={`${styles.navLink} ${activePage === 'workspace' ? styles.active : ''}`}
                    >Practice Hub</a>
                    <span>|</span>
                    <a>Event Tracker</a>
                    <span>|</span>
                    <a>Profile Tracker</a>
                    <button className="btn" onClick={onLogin}>Login</button>
                </div>
            </nav>
        </>
    );
}
export default Navbar;