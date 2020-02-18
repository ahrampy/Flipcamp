import { connect } from "react-redux";
import { fetchBookings, destroyBooking } from "../../actions/bookings";
import { fetchSites } from "../../actions/sites";
import BookingsIndex from "./bookings_index_pres";

const mSTP = state => {
  return {
    bookings: Object.values(state.entities.bookings),
    sites: Object.values(state.entities.sites),
    currentUser: state.session.currentUser
  };
};

const mDTP = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    fetchSites: () => dispatch(fetchSites()),
    destroyBooking: bookingId => dispatch(destroyBooking(bookingId))
  };
};

export default connect(mSTP, mDTP)(BookingsIndex);
