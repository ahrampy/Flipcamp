import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, signout }) => {
    const display = currentUser ? (
        <div>
            <h3>{currentUser.first_name}</h3>
            <button onClick={signout}>Sign Out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/signin">Sign In</Link>
            </div>
        );
    return (
        <header className="nav-bar">
            <h1 className="logo">TestTent</h1>
            <div>
                {display}
            </div>
        </header>
    )
}

export default Nav;