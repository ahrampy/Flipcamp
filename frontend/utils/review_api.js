export const createReview = (siteId, review) => {
  return $.ajax({
    method: "POST",
    url: `api/sites/${siteId}/reviews`,
    data: { review: review },
  });
};

export const editReview = (siteId, reviewId) =>
  $.ajax({
    method: "PATCH",
    url: `api/sites/${siteId}/reviews/${reviewId}/edit`,
  });

export const deleteReview = (reviewId) =>
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`,
  });

export const fetchReviews = () =>
  $.ajax({
    method: "GET",
    url: "api/reviews",
  });

export const fetchSiteReviews = (siteId) =>
  $.ajax({
    method: "GET",
    url: `api/sites/${siteId}/reviews`,
  });
