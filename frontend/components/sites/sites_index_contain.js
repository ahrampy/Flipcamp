import { connect } from 'react-redux';
import { fetchSites, createSite } from '../../actions/sites';
import { fetchBookings } from '../../actions/bookings';
import SiteIndex from './sites_index_pres';

const mSTP = state => {
    return ({
        sites: Object.values(state.entities.sites),
        bookings: Object.values(state.entities.bookings)
    })
};

const mDTP = dispatch => ({
    fetchSites: () => dispatch(fetchSites()),
    createSite: site => dispatch(createSite(site)),
    fetchBookings: () => dispatch(fetchBookings())
});

export default connect(mSTP, mDTP)(SiteIndex);