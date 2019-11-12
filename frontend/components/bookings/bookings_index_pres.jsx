import React from 'react';

class BookingsIndex extends React.Component {
    constructor (props) {
        super(props)
        this.findSite = this.findSite.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings()
        .then(this.props.fetchSites)
        window.scrollTo(0, 0);
    }

    findSite(siteId, bookingId) {
        let foundSite = null;
        this.props.sites.forEach( site => {
            if (site.id === siteId) {
                foundSite = site;
            } 
        })
        return foundSite ? (
            <div className='booking-index-site-container'>
                <div className='booking-index-site-title'>
                    {foundSite.title}
                </div>
                <div>
                    {foundSite.cost}
                </div>
                <div>
                    <button
                        onClick={() => this.props.destroyBooking(bookingId)}
                    >Cancel Booking
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
                {this.props.bookings.map(booking => {
                        if (booking.user_id === this.props.currentUser.id) {
                            if (!sites.length) return null;
                            return (
                                <div key={booking.id} className='booking-index-item'>
                                    <div>{this.findSite(booking.site_id, booking.id)}</div>
                                    <br/>
                                </div>
                            )
                        }
                    }
                )}
            </div>
        )
    }

}

export default BookingsIndex