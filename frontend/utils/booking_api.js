export const createBooking = (siteId, booking) => (
    $.ajax({
        method: 'POST',
        url: `api/sites/${siteId}/bookings`,
        booking
    })
)

export const editBooking = (siteId, bookingId) => (
    $.ajax({
        method: 'POST',
        url: `api/sites/${siteId}/bookings/${bookingId}/edit`,
        booking
    })
)

export const deleteBooking = (bookingId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/bookings/${bookingId}`
    })
)

export const fetchBookings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/bookings'
    })
)

export const fetchSiteBookings = siteId => (
    $.ajax({
        method: 'GET',
        url: ''
    })
)
