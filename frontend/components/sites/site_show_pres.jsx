import React from 'react';

class SiteShow extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.site) {
            this.props.fetchSite(this.props.match.params.siteId);
        };
        if (!this.props.bookings) {
            this.props.fetchBookings();
        }
        window.scrollTo(0, 0);
    };

    render () {
        
        if (!this.props.site) {
            return null;
        }

        const { title, site_type, cost, max_guests, img} = this.props.site
        // const { bookings } = this.props.bookings

        return (
            <div className='site-show-container'>
                <div className='site-show-img-container'>
                    <div className='site-show-img'>
                        <img src={img} alt="site-picture"/>
                    </div>
                </div>
                <div className='site-show-main'>
                    <div className='site-show-info-container'>
                        <div className='site-show-info-title'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    {/* <div className='site-show-site-type'>
                        <p>{site_type}</p>
                    </div> */}
                    <div className='site-show-widget-container'>
                        <div className='site-show-widget'>
                            <div className='site-show-widget-top-container'>
                                <div className='site-show-widget-top-content'>
                                    <div className='site-show-cost'>
                                        <h4>${cost}</h4>
                                        <p>per night</p>
                                    </div>
                                </div>
                            </div>
                            <div className='site-show-widget-bottom-container'>
                                <div className='site-show-widget-bottom-content'>
                                    <div className='site-show-max-guests'>
                                        {/* <p>{max_guests}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteShow;