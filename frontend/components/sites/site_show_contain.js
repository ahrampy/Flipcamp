import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/sites';
import { createBooking, fetchBookings, fetchSiteBookings } from '../../actions/bookings';
import { openModal } from '../../actions/modal';
import SiteShow from './site_show_pres';

const mSTP = (state, ownProps) => {

    return ({
        site: state.entities.sites[ownProps.match.params.siteId],
        currentUser: state.session.currentUser
            })
}

const mDTP = dispatch => ({
    fetchSite: (siteId) => dispatch(fetchSite(siteId)),
    deleteSite: (siteId) => dispatch(deleteSite(siteId)),
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (siteId, booking) => dispatch(createBooking(siteId, booking)),
    openModal: modal => dispatch(openModal(modal))
    // fetchSiteBookings: (siteId) => dispatch(fetchBookings(siteId))
})

export default connect(mSTP, mDTP)(SiteShow);
