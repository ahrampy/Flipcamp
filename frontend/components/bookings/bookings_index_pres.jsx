import React from "react";
import { Link } from "react-router-dom";

class BookingsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: this.props.bookings,
    };
    this.findSite = this.findSite.bind(this);
    this.months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  componentDidMount() {
    this.props.fetchBookings().then(this.props.fetchSites);
    window.scrollTo(0, 0);
  }

  findSite(siteId, booking) {
    let foundSite = null;
    let startDate, endDate, cost;
    this.props.sites.forEach((site) => {
      if (site.id === siteId) {
        foundSite = site;
        startDate = booking.check_in.slice(5).split("-").join("/");
        endDate = booking.check_out.slice(5).split("-").join("/");
        let startMonth =
          startDate.slice(0, 1) > 0
            ? startDate.slice(0, 2)
            : startDate.slice(1, 2);
        let endMonth =
          endDate.slice(0, 1) > 0 ? endDate.slice(0, 2) : endDate.slice(1, 2);
        let startDay = startDate.slice(3, 5);
        let endDay = endDate.slice(3, 5);
        let dif =
          startMonth === endMonth
            ? endDay - startDay
            : parseInt(this.months[startMonth]) -
              parseInt(startDay) +
              parseInt(endDay);
        cost = (dif + 1) * foundSite.cost;
      }
    });

    return foundSite ? (
      <div className="booking-index-site-container">
        <div className="booking-index-site-info">
          <div className="booking-index-site-title">
            <Link to={`/sites/${foundSite.id}`}>{foundSite.title}</Link>
          </div>
          <div>
            <span>
              From {startDate} to {` ${endDate}`}
            </span>
            <br />
            <span>Total cost: ${cost}</span>
          </div>
        </div>
        <div>
          <form
            action="http://maps.google.com/maps"
            method="get"
            target="_blank"
          >
            <input
              type="hidden"
              name="daddr"
              value={new google.maps.LatLng(foundSite.lat, foundSite.lng)}
            />
            <input
              className="get-directions-btn"
              type="submit"
              value="Get Directions"
            />
          </form>
        </div>
        <div>
          <button
            className="cancel-btn"
            onClick={
              () => this.props.destroyBooking(booking.id)
              // .then(() => this.props.history.push('/'))
            }
          >
            Cancel Booking
          </button>
        </div>
      </div>
    ) : null;
  }

  render() {
    if (!this.props.bookings || !this.props.sites) {
      return null;
    }

    let sites = this.props.sites;

    if (!this.props.bookings.length) {
      return (
        <div className="bookings-index-main-content">
          <div className="bookings-index-title-container">
            <h2>Your Upcoming Stays</h2>
          </div>
          <div className="bookings-index-empty">
            <h4>
              Want to get outside? <Link to="/">Let's go!</Link>
            </h4>
          </div>
        </div>
      );
    }

    return (
      <div className="bookings-index-main-content">
        <div className="bookings-index-title-container">
          <h2>Your Upcoming Stays</h2>
        </div>
        <div className="booking-index-stays">
          {this.props.bookings.map((booking) => {
            if (booking.user_id === this.props.currentUser.id) {
              if (!sites.length) return null;
              return (
                <div key={booking.id} className="booking-index-item">
                  <div>{this.findSite(booking.site_id, booking)}</div>
                  <br />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default BookingsIndex;
