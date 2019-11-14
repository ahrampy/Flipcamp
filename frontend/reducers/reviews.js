import { REMOVE_REVIEW, RECEIVE_REVIEWS } from "../actions/bookings";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews)
        case REMOVE_REVIEW:
            let nextState = Object.assign({}, state);
            delete nextState[action.reviewId]
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;