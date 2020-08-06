export const fetchSites = () =>
  $.ajax({
    method: "GET",
    url: "api/sites",
  });

export const fetchSite = (id) =>
  $.ajax({
    method: "GET",
    url: `api/sites/${id}`,
  });

export const createSite = (site) =>
  $.ajax({
    method: "POST",
    url: "api/sites",
    site,
  });

export const deleteSite = (siteId) =>
  $.ajax({
    method: "DELETE",
    url: `api/sites/${siteId}`,
  });

// export const createReview = review => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/reviews',
//         review
//     })
// );

// export const deleteReview = reviewId => (
//     $.ajax({
//         method: 'DELETE',
//         url: 'api/reviews'
//     })
// );
