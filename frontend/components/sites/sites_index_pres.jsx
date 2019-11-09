import React from 'react';
import { Link } from 'react-router-dom';

class SiteIndex extends React.Component {
    constructor (props) {
        super(props);        
    }

    componentDidMount() {
        this.props.fetchSites();
        this.props.fetchBookings();
    }

    render () {
        return (
            <div className='index-sites'> {
                this.props.sites.map(site => (
                    <div key={site.id} className='index-site-tile'>
                        <Link to={`/sites/${site.id}`}
                            style={{ textDecoration: 'none' }}>
                            <div className='site-tile-img-container'>
                                    {<img className='site-tile-img' src={site.img} alt=""/>}
                            </div>
                            <div className='site-tile-info'>
                                <div className='site-tile-info-description'>
                                    <div className='site-tile-info-title'>
                                        <h4>{site.title}</h4>
                                    </div>
                                    <div className='site-tile-info-site-type'>
                                        <p>{site.site_type}</p>
                                    </div>
                                </div>
                                <div className='site-tile-info-specs'>
                                    <div className='site-tile-info-cost'>
                                        <p>${site.cost} / night</p>
                                    </div>
                                    <div className='site-tile-booked-container'>
                                        <div className='site-tile-booked'></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
            </div>
        )
    };
};

export default SiteIndex;