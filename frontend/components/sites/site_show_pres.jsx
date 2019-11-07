import React from 'react';

class SiteShow extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.site) {
            this.props.fetchSite(this.props.match.params.siteId);
        };
    };

    render () {

        if (!this.props.site) {
            return null;
        }

        const { title, site_type, cost, max_guests, img } = this.props.site

        return (
            <div className='site-show-container'>
                <div className='site-show-img_container'>
                    <img src={img} alt="site_picture"/>
                </div>
                <div className='site-show-title'>
                    <h2>{title}</h2>
                </div>
                <div className='site-show-site_type'>
                    <p>{site_type}</p>
                </div>
                <div className='site-show-cost'>
                    <p>{cost}</p>
                </div>
                <div className='site-show-max_guests'>
                    <p>{max_guests}</p>
                </div>
            </div>
        )
    }
}

export default SiteShow;