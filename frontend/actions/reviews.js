import * as APIUtil from "../utils/review_api";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const deleteReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId: reviewId
  };
};

export const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then(reviews =>
    dispatch(receiveReviews(reviews))
  );
};

export const fetchSiteReviews = siteId => dispatch => {
  return APIUtil.fetchSiteReviews(siteId).then(siteReviews =>
    dispatch(receiveReviews(siteReviews))
  );
};

export const createReview = (siteId, review) => dispatch => {
  return APIUtil.createReview(siteId, review).then(review =>
    dispatch(receiveReview(review))
  );
};

export const editReview = (siteId, review) => dispatch => {
  return APIUtil.editReview(siteId, review).then(review =>
    dispatch(receiveReview(review))
  );
};

export const destroyReview = reviewId => dispatch => {
  return APIUtil.deleteReview(reviewId).then(() =>
    dispatch(deleteReview(reviewId))
  );
};
