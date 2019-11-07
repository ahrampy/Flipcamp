import React from 'react';
import { Link } from 'react-router-dom';

class SiteIndex extends React.Component {
    constructor (props) {
        super(props);        
    }

    componentDidMount() {
        this.props.fetchSites();
    }

    render () {
        return (
            <div className='index-sites'> {
                this.props.sites.map(site => (
                    <div key={site.id} className='index-sites-site'>
                        <div className='index-sites-site-img-container'>
                            <Link to={`/sites/${site.id}`}>
                                {<img className='index-sites-site-img' src={site.img} alt=""/>} 
                            </Link>
                        </div>
                        <div className='index-site-info'>
                            <div className='index-site-info-description'>
                                <div className='index-site-info-title'>
                                    <h4>{site.title}</h4>
                                </div>
                                <div className='index-site-info-site-type'>
                                    <p>{site.site_type}</p>
                                </div>
                            </div>
                            <div className='index-site-info-specs'>
                                <div className='index-site-info-cost'>
                                    <p>${site.cost} / night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        )
    };
};

export default SiteIndex;