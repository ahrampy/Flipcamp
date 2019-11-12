import React from 'react';
import { Link } from 'react-router-dom';

class BookingsIndex extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            bookings: this.props.bookings
        }

        this.findSite = this.findSite.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings()
        .then(this.props.fetchSites)
        window.scrollTo(0, 0);
    }

    findSite(siteId, booking) {
        let foundSite = null;
        this.props.sites.forEach( site => {
            if (site.id === siteId) {
                foundSite = site;
            } 
        })
        
        return foundSite ? (
            <div className='booking-index-site-container'>
                <div className='booking-index-site-info'>
                    <div className='booking-index-site-title'>
                        <Link
                            to={`/sites/${foundSite.id}`}
                            style={{ textDecoration: 'none' }}
                            >{foundSite.title}
                        </Link>
                    </div>
                    <div>
                        From {booking.check_in.slice(5).split('-').join('/')} to {
                        booking.check_out.slice(5).split('-').join('/')}
                    </div>
                    <div>
                        Total cost: ${ Math.abs(( parseInt(booking.check_out.slice(8))
                                        - parseInt(booking.check_in.slice(8)) )
                                        * parseInt(foundSite.cost))
                    }
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => this.props.destroyBooking(booking.id)}>
                        Cancel Booking
                    </button>
                </div>
            </div>
        ) : null;
    }

    render(){

        if (!this.props.bookings || !this.props.sites) {
            return null;
        }

        let sites = this.props.sites

        return (
            <div className='bookings-index-main-content'>
                <div className='bookings-index-title-container'>
                    <h2>Your Upcoming Stays</h2>
                </div>
                <div className='booking-index-stays'>
                {this.props.bookings.map(booking => {
                        if (booking.user_id === this.props.currentUser.id) {
                            if (!sites.length) return null;
                            return (
                                <div key={booking.id} className='booking-index-item'>
                                    <div>{this.findSite(booking.site_id, booking)}</div>
                                    <br/>
                                </div>
                            )
                        }
                    }
                )}
                </div>
            </div>
        )
    }

}

export default BookingsIndex