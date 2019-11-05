import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, signout }) => {
    const display = currentUser ? (
        <div>
            <button className='btn' onClick={signout}>Sign Out</button>
        </div>
    ) : (
            <>
                <Link to='/signup'>
                    <button className='btn'>Sign Up</button>
                </Link>
                <Link to='/signin'>
                    <button className='btn'>Sign In</button>
                </Link>
            </>
        );
    return (
        <header className='nav-bar'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='nav-logos'>
                    <img className='nav-logo-img' src={ window.tent } />
                    <br/>
                    <h1 className='nav-logo-name'>Flipcamp</h1>
                </div>
            </Link>
            <div className='nav-buttons'>
                {display}
            </div>
        </header>
    )
}

export default Nav;