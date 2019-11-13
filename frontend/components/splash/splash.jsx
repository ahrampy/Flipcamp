import React from 'react';
import SiteIndex from '../sites/sites_index_contain';

const Splash = () => (
    <div className="splash-main-container">
        <div className="splash-main">
            <div className='splash-header'>
                <h1>
                    Natural discovery.
                </h1>
                <p>
                    Book unique camping experiences in the best sites worldwide, nevermind they're all in California.
                </p>
            </div>
            <div className='splash-site-index'>
                <SiteIndex/>
            </div>
        </div>
    </div>
)

export default Splash;