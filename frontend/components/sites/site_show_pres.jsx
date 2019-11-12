import React from 'react';
import BookingForm from '../bookings/bookings_form';

class SiteShow extends React.Component {
    constructor (props) {
        super(props)
    }

    componentWillMount() {
        if (!this.props.site) {
            this.props.fetchSite(this.props.match.params.siteId);
        };
        if (!this.props.bookings) {
            this.props.fetchBookings();
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    };

    render () {
        
        if (!this.props.site) {
            return null;
        }

        const { id, user_id, title, site_type, cost, max_guests, img } = this.props.site

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
                                    <div className='booking-form-container'>
                                        <BookingForm
                                            currentUser={this.props.currentUser}
                                            site_id={id}
                                            max_guests={max_guests}
                                            bookings={this.props.bookings}
                                            createBooking={this.props.createBooking}
                                            openModal={this.props.openModal}
                                        />
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