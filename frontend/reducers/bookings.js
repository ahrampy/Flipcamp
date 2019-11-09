import { REMOVE_BOOKING, RECEIVE_BOOKINGS} from "../actions/bookings";
import { RECEIVE_CURRENT_USER } from "../actions/session";

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, state, action.currentUser.bookings)
        case RECEIVE_BOOKINGS:
            return Object.assign({}, action.bookings)
        case REMOVE_BOOKING:
            let nextState = Object.assign({}, state);
            delete nextState[action.bookingId]
            return nextState;
        default:
            return state;
    }
}

export default bookingsReducer;