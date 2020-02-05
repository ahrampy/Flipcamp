import React from 'react';
import SiteTile from './sites_index_tile';

class SiteIndex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchParams: '',
            searching: false
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchSites();
        this.props.fetchBookings();
        window.scrollTo(0, 0);
    }

    handleSearch(event) {
        this.setState({ searchParams: event.target.value.toLowerCase() });
        if (this.state.searchParams !== '') {
            this.state.searching = true;
        } else {
            this.state.searching = false;
        }
    }

    render () {

        if (!this.props.sites) {
            return null;
        }

        return (
            <div>
                <div className="search-holder">
                    <img src="/link_icons/search.png" alt="" />
                    <input
                        className="search-input"
                        type="text"
                        value={this.state.searchParams}
                        placeholder="search by name or type..."
                        onChange={this.handleSearch}
                    />
                </div>
                <div className='index-sites'> {
                    this.props.sites.map(site => {
                        if (this.state.searching) {
                            if (!site.title.toLowerCase().includes(this.state.searchParams) &&
                                !site.site_type.toLowerCase().includes(this.state.searchParams)
                            ) {
                              return
                            }
                        }
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
            </div>
        )
    };
};

export default SiteIndex;