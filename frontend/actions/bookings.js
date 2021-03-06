import * as APIUtil from "../utils/booking_api";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking,
});

const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

const deleteBooking = (bookingId) => {
  return {
    type: REMOVE_BOOKING,
    bookingId: bookingId,
  };
};

export const fetchBookings = () => (dispatch) => {
  return APIUtil.fetchBookings().then((bookings) =>
    dispatch(receiveBookings(bookings))
  );
};

export const fetchSiteBookings = (siteId) => (dispatch) => {
  return APIUtil.fetchSiteBookings(siteId).then((siteBookings) =>
    dispatch(receiveBookings(siteBookings))
  );
};

export const createBooking = (siteId, booking) => (dispatch) => {
  return APIUtil.createBooking(siteId, booking).then((booking) =>
    dispatch(receiveBooking(booking))
  );
};

export const destroyBooking = (bookingId) => (dispatch) => {
  return APIUtil.deleteBooking(bookingId).then(() =>
    dispatch(deleteBooking(bookingId))
  );
};
