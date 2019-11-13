import React from 'react';
import BookingForm from '../bookings/bookings_form';
import SiteMap from '../map/site_map';

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

        const { id, title, cost, max_guests, img, description, lat, lng } = this.props.site

        // debugger;
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
                        <div className='site-show-info-descrition'>
                            <p>{description}</p>
                        </div>
                        <div className='site-show-info-cards-container'>
                            <div className='site-show-info-card'>
                                <div className='site-card-title'>
                                    <h3>Campsite area</h3>
                                </div>
                                <div className='site-card-list'>
                                    <ul>
                                        <li>
                                            <img src="assets/camping.png" alt="camping"/>
                                            Bring your own tents
                                        </li>
                                        <li>
                                            <img src="assets/sites.png" alt="marker"/>
                                            4 sites
                                        </li>
                                        <li>
                                            <img src="assets/guests.png" alt="guest"/>
                                            Up to {max_guests} guests
                                        </li>
                                        <li>
                                            <img src="assets/hiking.png" alt="hiker"/>
                                            Moderate walk
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='site-show-info-card'>
                                <div className='site-card-title'>
                                    <h3>Essentials</h3>
                                </div>
                                <div className='site-card-list'>
                                    <ul>
                                        <li>
                                            <img src="assets/toilet_true.png" alt="" />
                                            Toilet available
                                        </li>
                                        <li>
                                            <img src="assets/pets_true.png" alt="dog" />
                                            Pets allowed
                                        </li>
                                        <li>
                                            <img src="assets/campfire_false.png" alt="dog" />
                                            No campfires
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='site-show-info-card'>
                                <div className='site-card-title'>
                                    <h3>Ammenities</h3>
                                </div>
                                <div className='site-card-list'>
                                    <ul>
                                        <li>
                                            <img src="assets/water_true.png" alt="" />
                                            Potable water available
                                        </li>
                                        <li>
                                            <img src="assets/shower_false.png" alt="" />
                                            No showers
                                        </li>
                                        <li>
                                            <img src="assets/picnic_false.png" alt="" />
                                            No picnic table
                                        </li>
                                        <li>
                                            <img src="assets/wifi_false.png" alt="" />
                                            No wifi
                                        </li>
                                        <li>
                                            <img src="assets/bins_false.png" alt="" />
                                            Pack it out
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='site-show-info-details-container'>
                            <h3>Details</h3>
                            <ul>
                                <li>
                                    Check in: <span>After 2PM</span>
                                </li>
                                <li>
                                    Check out: <span>Before 12PM</span> 
                                </li>
                                <li>
                                    Cancellation Policy: <span>Strict</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    On Arrival: <span>Meet and greet</span>
                                </li>
                                <li>
                                    Minimum Nights: <span>1 night</span>
                                </li>
                                <li>
                                    Accept Bookings: <span>12 months out</span>
                                </li>
                                <li>
                                    Weeknight discount: <span>30% off</span>
                                </li>
                            </ul>
                        </div>
                    </div>

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
                                <div className='site-show-widget-map-container'>
                                    <SiteMap lng={lng} lat={lat}/>
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