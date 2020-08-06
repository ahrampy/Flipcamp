export const createBooking = (siteId, booking) => {
  return $.ajax({
    method: "POST",
    url: `api/sites/${siteId}/bookings`,
    data: { booking: booking },
  });
};

export const editBooking = (siteId, bookingId) =>
  $.ajax({
    method: "PATCH",
    url: `api/sites/${siteId}/bookings/${bookingId}/edit`,
  });

export const deleteBooking = (bookingId) =>
  $.ajax({
    method: "DELETE",
    url: `api/bookings/${bookingId}`,
  });

export const fetchBookings = () =>
  $.ajax({
    method: "GET",
    url: "api/bookings",
  });

export const fetchSiteBookings = (siteId) =>
  $.ajax({
    method: "GET",
    url: `api/sites/${siteId}/bookings`,
  });
