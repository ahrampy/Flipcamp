import React from 'react';
import { Link } from 'react-router-dom';
import SiteTile from './sites_index_tile';

class SiteIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSites();
        this.props.fetchBookings();
        window.scrollTo(0, 0);
    }

    render () {

        if (!this.props.sites) {
            return null;
        }

        return (
            <div className='index-sites'> {
                this.props.sites.map(site => {
                    let booked = false;
                    this.props.bookings.forEach(booking => {
                        if (this.props.currentUser) {
                            if (booking.site_id === site.id &&
                                booking.user_id === this.props.currentUser.id) {
                                booked = true;
                            }
                        }
                    })
                    return (
                        <SiteTile key={site.id} site={site} booked={booked}/>
                    )
                })
            }
            </div>
        )
    };
};

export default SiteIndex;