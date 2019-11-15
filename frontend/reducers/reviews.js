import { REMOVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/reviews";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, action.review)
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