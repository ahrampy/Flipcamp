import { connect } from 'react-redux';
import { fetchSite, deleteSite } from '../../actions/sites';
import { createBooking, fetchBookings, fetchSiteBookings } from '../../actions/bookings';
import { createReview, editReview, destroyReview, fetchReviews, fetchSiteReviews } from '../../actions/reviews';
import { openModal } from '../../actions/modal';
import SiteShow from './site_show_pres';

const mSTP = (state, ownProps) => {

    let userId;

    if (state.session.currentUser) {
        userId = state.session.currentUser.id
    }

    return ({
        site: state.entities.sites[ownProps.match.params.siteId],
        reviews: Object.values(state.entities.reviews),
        currentUser: state.session.currentUser,
        userId: userId
            })
}

const mDTP = dispatch => ({
    fetchSite: (siteId) => dispatch(fetchSite(siteId)),
    deleteSite: (siteId) => dispatch(deleteSite(siteId)),
    fetchBookings: () => dispatch(fetchBookings()),
    createBooking: (siteId, booking) => dispatch(createBooking(siteId, booking)),
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: (siteId, review) => dispatch(createReview(siteId, review)),
    editReview: (siteId, review) => dispatch(editReview(siteId, review)),
    destroyReview: reviewId => dispatch(destroyReview(reviewId)),
    openModal: modal => dispatch(openModal(modal))
    // fetchSiteBookings: (siteId) => dispatch(fetchBookings(siteId))
    // fetchSiteReviews: (siteId) => dispatch(fetchReviews(siteId))
})

export default connect(mSTP, mDTP)(SiteShow);
