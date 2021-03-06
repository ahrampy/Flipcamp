import React from "react";
import BookingForm from "../bookings/bookings_form";
import ReviewForm from "../reviews/reviews_form";
import SiteMap from "../map/site_map";

class SiteShow extends React.Component {
  constructor(props) {
    super(props);
    this.checkWidget = this.checkWidget.bind(this);
    this.checkMap = this.checkMap.bind(this);
    this.bookWidget = React.createRef();
    this.state = {
      mapSize: null,
      distTop: null,
      widgetPos: "absolute",
      widgetTop: "",
      widgetBottom: "0px",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.checkWidget);
    window.addEventListener("resize", this.checkMap);

    if (!this.props.site) {
      this.props.fetchSite(this.props.match.params.siteId);
    }
    if (!this.props.bookings) {
      this.props.fetchBookings();
    }
    if (!this.props.reviews.length) {
      this.props.fetchReviews();
    }

    this.checkMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews.length !== prevProps.reviews.length) {
      this.props.fetchReviews();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkWidget);
    window.removeEventListener("resize", this.checkMap);
  }

  checkMap() {
    this.setState({
      mapSize: window.innerHeight - 328,
    });
  }

  checkWidget() {
    if (this.bookWidget.current) {
      if (this.state.distTop === null) {
        this.setState({ distTop: this.bookWidget.current.offsetTop - 75 });
      }
      let height = window.pageYOffset;
      let isFixed = this.state.widgetPos === "fixed";
      if (!isFixed && this.state.distTop < height) {
        this.setState({
          widgetPos: "fixed",
          widgetTop: "75px",
          widgetBottom: "",
        });
      } else if (isFixed && this.state.distTop > height) {
        this.setState({
          widgetPos: "absolute",
          widgetTop: "",
          widgetBottom: "0px",
        });
      }
    }
  }

  render() {
    if (!this.props.site) {
      return null;
    }

    const {
      id,
      title,
      cost,
      max_guests,
      img,
      description,
      lat,
      lng,
    } = this.props.site;

    return (
      <div className="site-show-container">
        <div className="site-show-img-container">
          <img className="site-show-img" src={img} alt="site-picture" />
        </div>
        <div className="site-show-main">
          <div className="site-show-info-container">
            <div className="site-show-info-title">
              <h2>{title}</h2>
            </div>
            <div className="site-show-info-descrition">
              <p>{description}</p>
            </div>
            <div className="site-show-info-cards-container">
              <div className="site-show-info-card">
                <div className="site-card-title">
                  <h3>Campsite area</h3>
                </div>
                <div className="site-card-list">
                  <ul>
                    <li>
                      <img src={"/camping.png"} alt="camping" />
                      Bring your own tents
                    </li>
                    <li>
                      <img src={"/sites.png"} alt="marker" />4 sites
                    </li>
                    <li>
                      <img src={"/guests.png"} alt="guest" />
                      Up to {max_guests} guests
                    </li>
                    <li>
                      <img src={"/hiking.png"} alt="hiker" />
                      Moderate walk
                    </li>
                  </ul>
                </div>
              </div>
              <div className="site-show-info-card">
                <div className="site-card-title">
                  <h3>Essentials</h3>
                </div>
                <div className="site-card-list">
                  <ul>
                    <li>
                      <img src={"/toilet_true.png"} alt="" />
                      Toilet available
                    </li>
                    <li>
                      <img src={"/pets_true.png"} alt="" />
                      Pets allowed
                    </li>
                    <li>
                      <img src={"/campfire_false.png"} alt="" />
                      No campfires
                    </li>
                  </ul>
                </div>
              </div>
              <div className="site-show-info-card">
                <div className="site-card-title">
                  <h3>Ammenities</h3>
                </div>
                <div className="site-card-list">
                  <ul>
                    <li>
                      <img src={"/water_true.png"} alt="" />
                      Potable water available
                    </li>
                    <li>
                      <img src={"/shower_false.png"} alt="" />
                      No showers
                    </li>
                    <li>
                      <img src={"/picnic_false.png"} alt="" />
                      No picnic table
                    </li>
                    <li>
                      <img src={"/wifi_false.png"} alt="" />
                      No wifi
                    </li>
                    <li>
                      <img src={"/bins_false.png"} alt="" />
                      Pack it out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="site-show-info-details-container">
              <h3>Details</h3>
              <ul>
                <li>
                  Check in: <span>After 2PM</span>
                </li>
                <li>
                  Check out: <span>Before 12PM</span>
                </li>
                <li>
                  Cancellation Policy: <span>Strict</span>
                </li>
              </ul>
              <ul>
                <li>
                  On Arrival: <span>Go straight to camp</span>
                </li>
                <li>
                  Minimum Nights: <span>1 night</span>
                </li>
                <li>
                  Accept Bookings: <span>12 months out</span>
                </li>
                <li>
                  Weeknight discount: <span>30% off</span>
                </li>
              </ul>
            </div>
            <div className="site-show-info-activities-container">
              <h3>Activities</h3>
              <ul>
                <li>
                  <img src={"/biking.png"} alt="" />
                  <br />
                  Biking
                </li>
                <li>
                  <img src={"/fishing.png"} alt="" />
                  <br />
                  Fishing
                </li>
                <li>
                  <img src={"/hiking-sml.png"} alt="" />
                  <br />
                  Hiking
                </li>
                <li>
                  <img src={"/paddling.png"} alt="" />
                  <br />
                  Paddling
                </li>
                <li>
                  <img src={"/swimming.png"} alt="" />
                  <br />
                  Swimming
                </li>
                <li>
                  <img src={"/wildlife.png"} alt="" />
                  <br />
                  Wildlife
                </li>
                <li></li>
              </ul>
            </div>
            <div className="site-show-info-terrain-container">
              <h3>Terrain</h3>
              <ul>
                <li>
                  <img src={"/forest.png"} alt="" />
                  <br />
                  Forest
                </li>
                <li>
                  <img src={"/lake.png"} alt="" />
                  <br />
                  Lake
                </li>
                <li></li>
              </ul>
            </div>
            <div className="site-show-reviews-container">
              <h3>Reviews</h3>
              <div className="site-show-reviews">
                {this.props.reviews.map((review) => {
                  // const created_at = review.created_at.slice(0, 10);
                  if (review.site_id === id) {
                    return (
                      <div key={review.id} className="review-container">
                        <div className="review-header">
                          <div className="review-author">
                            <h4>
                              {review.author}
                              {review.recommend && (
                                <span> recommends this listing</span>
                              )}
                              {!review.recommend && (
                                <span> does not recommend this listing</span>
                              )}
                            </h4>
                          </div>
                          {/* <div className='review-date'> <span>{created_at}</span> </div> */}
                        </div>
                        <div className="review-body">
                          {review.body}
                          <div>
                            {review.user_id === this.props.userId && (
                              <button
                                className="review-delete-button"
                                onClick={() =>
                                  this.props.destroyReview(review.id)
                                }
                              >
                                Remove Review
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="review-form">
                <ReviewForm
                  currentUser={this.props.currentUser}
                  site_id={id}
                  user_id={this.props.userId}
                  createReview={this.props.createReview}
                  openModal={this.props.openModal}
                />
              </div>
            </div>
          </div>

          <div
            className="site-show-widget-container"
            ref={this.bookWidget}
            style={{
              // display: "inline-block",
              position: this.state.widgetPos,
              top: this.state.widgetTop,
              bottom: this.state.widgetBottom,
              right: "0px",
              width: "30%",
            }}
          >
            <div className="site-show-widget">
              <div className="site-show-widget-top-container">
                <div className="site-show-widget-top-content">
                  <div className="site-show-cost">
                    <h4>${cost}</h4>
                    <p>per night</p>
                  </div>
                </div>
              </div>
              <div className="site-show-widget-bottom-container">
                <div className="site-show-widget-bottom-content">
                  <div className="booking-form-container">
                    <BookingForm
                      currentUser={this.props.currentUser}
                      site_id={id}
                      max_guests={max_guests}
                      bookings={this.props.bookings}
                      createBooking={this.props.createBooking}
                      openModal={this.props.openModal}
                    />
                  </div>
                </div>
                <div
                  className="site-show-widget-map-container"
                  style={{ height: `${this.state.mapSize}px` }}
                >
                  <SiteMap lng={lng} lat={lat} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SiteShow;
