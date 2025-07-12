import logo from '../assets/logo.svg';
import Login from '../login';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Leftsidebar.module.css';
import LeaderBoard from './LeaderBoard';
function Navbar({ onLogoClick }) {

    const location = useLocation();
    return (
        <>
            <nav className="navbar">
                <div className='logo' style={{ cursor: 'pointer' }}>
                    <img src={logo}  onClick={onLogoClick} ></img>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>
                            <span style={{ fontSize:'25px', color: 'black'}}>Algo</span>
                            <span style={{ fontSize:'25px', color: '#3b82f6'}}>Base</span>
                        </h1></Link>

                </div>
                <div className="nav-atb">
                    <Link to="/LeaderBoard" className={`${styles.navLink} ${location.pathname === '/LeaderBoard' ? styles.LeaderBoard : ''}`}>Leader Board</Link>
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