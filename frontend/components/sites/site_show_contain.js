import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/sites';
import { createBooking, fetchBookings, fetchSiteBookings } from '../../actions/bookings';
import SiteShow from './site_show_pres';

const mSTP = (state, ownProps) => {
    let bookings = null;

    // if (state.session.currentUser) {
    //     bookings = state.session.currentUser.bookings;
    // }

    return ({
        site: state.entities.sites[ownProps.match.params.siteId],
            })
}

const mDTP = dispatch => ({
    fetchSite: (siteId) => dispatch(fetchSite(siteId)),
    deleteSite: (siteId) => dispatch(deleteSite(siteId)),
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (siteId, booking) => dispatch(createBooking(siteId, booking))
    // fetchSiteBookings: (siteId) => dispatch(fetchBookings(siteId))
})

export default connect(mSTP, mDTP)(SiteShow);
