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
                    Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.
                </p>
            </div>
            <div className='splash-site-index'>
                <SiteIndex/>
            </div>
        </div>
    </div>
)

export default Splash;