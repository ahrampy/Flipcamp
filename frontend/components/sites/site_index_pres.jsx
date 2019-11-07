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
                    <div className='index-sites-site'>
                        <Link to={`/sites/${site.id}`}>{
                            <img src={site.img} alt=""/> 
                            }</Link>
                        <div className='index-site-info'>
                            <div className='index-site-info-title'>
                                <p>{site.title}</p>
                            </div>
                            <div className='index-site-info-site-type'>
                                <p>{site.site_type}</p>
                            </div>
                            <div className='index-site-info-cost'>
                                <p>{site.cost}</p>
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