# Flipcamp

[Flipcamp Live](https://flipcamp.herokuapp.com/#/)

Flipcamp is a site clone of Hipcamp, an online marketplace that helps users find and book campsites directly from landowners. In this clone, I have focused on the feel of the homepage, as well as the simplicity of information layout the original site does so well in its views of individual campsites. I was interested in using the same react-dates component featured on Hipcamp and so many other booking sites, and the google maps API within a react component. In the future of this project I would love to build in search functionality, as well as add additional seeds to with more specific location sub-categories. Thanks for taking a look!


## Technologies

* PostgreSQL
* Ruby on Rails
* Javascript
* React.js
* Redux.js
* Node.js
* JBuilder
* Webpack
* Google Maps API

Flipcamp was built with a Ruby on Rails framework, utilizing PostgresSQL for organized data storage, and the React and Redux libraries for dynamic frontend, single-page app navigation and interactivity. It includes the Google Maps API and is planned to fully integrate Amazon Web Services S3 photo storage to allow image uploading without impacting site performance. 


## Features

### User Authorization

Flipcamp uses standard Ruby on Rails authorization pattern with BCrypt's secure hashing procedure, which never stores a plain text password or an un-salted one, allowing users to safely sign up and sign back in to access their listings and camp reservations, and leave reviews on other campsite listings. A demo user is also provided to preview some protected site features.

<img src="https://i.imgur.com/FEUdfv2.png"/>

<!-- ```ruby
class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :sites
    has_many :bookings
    has_many :reviews

    before_validation :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end

``` -->

### Front Page

When the site is first navigated to, they will be presented an index of campsite listings, including a simple "tag" indicating whether they have a current reservation anywhere. Each site tile is interactive and clickable, and displays basic site information including site type, nightly cost, title, and the reservation tag. As a future addition, a search function and/or site filtering can be added.

<img src="https://i.imgur.com/BxgrCpI.png"/>

### Campsites

Flipcamp displays all relevant information a prospective camper may want to know about a campsite. Users can view, book, delete, and get directions to a campsite, with the added help of react-dates. Campsites can also be reviewed and show wether a reviewer generally recommends a camping spot or not.

#### Bookings

With an implementation of react-dates and its two-month spread build, users can select a start date and an end date for their camping trip in a fluid set opf clicks, without clicking away to select different dropdowns or pages.

<!-- ```javascript
return (
    <div className='booking-form-container'>
        <form onSubmit={this.handleSubmit} className='booking-form'>
            <div id='date-range-picker-container'>
                <DateRangePicker
                    startDate={this.state.startDate} 
                    startDateId="check-in"
                    endDate={this.state.endDate}
                    endDateId="check-out"
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
            </div>
            <div className='booking-form-guest-select-container'>
                <select
                    value={this.state.num_guests}
                    onChange={this.handleChange}
                    name="Guests" className='booking-form-guest-select'>
                    <option value="Guests" disabled="disabled">Guests</option>
                    {guests.map(count => (
                        <option key={count} value={count}>{count}</option>
                    ))}
                </select>
            </div>
            <div className='booking-submit-button-container'>
                <input
                    className='booking-submit-button'
                    type="submit"
                    value={subimtButtonValue}
                />
            </div>
        </form>
    </div>
);
``` -->

#### Information

With every campsite comes a long list of potential features, either available or not. These all need an area to be displayed, so the potential campers have a good sense of what they are getting and what they need to bring. Most input is limited to boolean true or false values, but some categories include more advanced options such as sign-in/sign-out times or what the arrival procedure is like.

#### Reviews

At the bottom of every campsite listing, users are given the option to review their experience during their stays, as well as give a simple recommend/do not recommend indication. In future implementations, user should be able to see their reviews in addition to where they have stayed in the past, with an option to review.

<p align="center">
  <img width="410" height="300" src="https://i.imgur.com/pKhc67f.png"/>
  <img width="370" height="300" src="https://i.imgur.com/oeaA62M.png"/>
</p>

### Google Maps

See where your campsite is, and once you've booked it, get directions straight there. The added feature of Google Maps Circles makes the location less specific while showing the general area in order to protect privacy while giving prospective campers a sense of where they would be.

<p align="center">
  <img width="410" height="340" src="https://i.imgur.com/q3sGZsp.png"/>
  <img width="370" height="320" src="https://i.imgur.com/mtqDZ1f.png"/>
</p>

<!-- ```javascript
import React from 'react';

class SiteMap extends React.Component {
    constructor (props) {
        super(props);
    };

    componentDidMount() {

        const mapOptions = {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 12
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.circle = new google.maps.Circle({
            strokeColor: '#F6C270',
            strokeOpacity: 0.8,
            strokeWeight: 2.5,
            fillColor: '#F6C270',
            fillOpacity: 0.40,
            map: this.map,
            center: { lat: this.props.lat, lng: this.props.lng },
            radius: 2000
        });
    };

    render() {
        return (
            <div id='widget-map' ref={map => this.mapNode = map}></div>
        );
    };
};

export default SiteMap;
``` -->

## Future Plans and Implementations

In addition to adding AWS S3 photo services to allow new campsite listing creations, a simple user profile which shows user reviews can be added, as well as "saved spots" to allow a user to bookmark and come back to campsites they are interested in or particularly enjoyed.
