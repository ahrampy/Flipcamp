import React from 'react';

class SiteShow extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSite(this.props.match.params.siteId)
    }

    render () {

        const { title, site_type, cost, max_guests } = this.props.site
        
        return (
            <div className='site-show-container'>
                <img src="" alt=""/>
                <div className='site-show-title'>
                    {title}
                </div>
                <div className='site-show-site_type'>
                    {site_type}
                </div>
                <div className='site-show-cost'>
                    {cost}
                </div>
                <div className='site-show-max_guests'>
                    {max_guests}
                </div>
            </div>
        )
    }
}

export default SiteShow;