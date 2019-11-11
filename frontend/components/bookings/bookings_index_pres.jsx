import React from 'react';

class BookingsIndex extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBookings()
        this.props.fetchSites()
        window.scrollTo(0, 0);
    }

    render(){

        // if (!this.props.bookings || !this.props.sites) {
        //     return null;
        // }

        return (
            <div className='bookings-index-main-content'>
                <h2>Your Current Bookings</h2>
                {this.props.bookings.map(booking => {
                    if (this.props.sites) {
                        if (booking.user_id === this.props.currentUser.id) {
                            // let site = booking.site_id
                            return (
                                <div key={booking.id} className='booking-index-item'>
                                    <p>hey</p>
                                </div>
                            )
                        }
                    }
                })}
            </div>
        )
    }

}

export default BookingsIndex