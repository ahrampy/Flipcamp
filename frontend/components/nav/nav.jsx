import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { signout, currentUser, openModal } = this.props;

        let buttons = currentUser ? (
            <div>
                <button className='btn' onClick={signout}>Sign Out</button>
            </div>
        ) : (
            <>
                    <button className='btn' onClick={() => openModal('signin')}>
                        Sign In
                    </button>

                    <button className='btn' onClick={() => openModal('signup')}>
                        Sign Up
                    </button>
            </>
            );
        return (
            <header className='nav-bar-container'>
                <div className='nav-bar'>
                    <Link to='/' style={{ textDecoration: 'none' }, { outline : 'none' }}>
                        <div className='nav-logos'>
                            <img className='nav-logo-name' src='/logo.png'>
                            </img>
                        </div>
                    </Link>
                    <div className='nav-buttons'>
                        {buttons}
                    </div>
                </div>
            </header>
        )
    }
}

export default Nav;