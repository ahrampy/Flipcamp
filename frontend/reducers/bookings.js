import {
  REMOVE_BOOKING,
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING
} from "../actions/bookings";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING:
      return Object.assign({}, state, action.booking);
    case RECEIVE_BOOKINGS:
      return Object.assign({}, action.bookings);
    case REMOVE_BOOKING:
      let nextState = Object.assign({}, state);
      delete nextState[action.bookingId];
      return nextState;
    default:
      return state;
  }
};

export default bookingsReducer;
