import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { signout, currentUser, openModal } = this.props;

        let buttons = currentUser ? (
            <>
                <div className="dropdown">
                    <button className="dropbtn">{currentUser.first_name}</button>
                    <div className="dropdown-content">
                        <Link to='/bookings' style={{ textDecoration: 'none' }, { outline: 'none' }}>
                            Bookings
                        </Link>
                    </div>
                </div>

                <button className='btn' onClick={signout}>Sign Out</button>
            </>
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
                    <div className='nav-logo-container'>
                        <Link to='/' style={{ textDecoration: 'none' }, { outline : 'none' }}>
                            <div className='nav-logos'>
                                <img className='nav-logo-name' src='/logo.png'>
                                </img>
                            </div>
                        </Link>
                    </div>
                    {/* <div className='search-bar'>
                        <img src="/assets/search.png" alt=""/>
                        <input type="text"/>
                    </div> */}
                    <div className='nav-buttons'>
                        {buttons}
                        <div className="dropdown">
                            <button className="dropbtn links"><img id='link-icon' src="/assets/tent.png" alt="tent"/></button>
                            <div className="dropdown-content links-content">
                                <a href='https://www.ahrampy.com/' style={{ textDecoration: 'none' }, { outline: 'none' }}>
                                    Portfolio <img src="/assets/portfolio.png" alt="portfolio"/>
                                </a>
                                <a href='https://github.com/ahrampy' style={{ textDecoration: 'none' }, { outline: 'none' }}>
                                    GitHub <img src="/assets/github-logo.png" alt="git hub"/>
                                </a>
                                <a href='https://www.linkedin.com/in/adrian-rampy-1b8924198/' style={{ textDecoration: 'none' }, { outline: 'none' }}>
                                    LinkedIn <img src="/assets/linkedin.png" alt="linked in"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Nav;