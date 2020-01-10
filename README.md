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

Flipcamp uses BCrypt's secure password auth pattern, allowing users to safely sign up and sign back in to access their listings and camp reservations, and leave comments on other campsite listings. A demo user is also provided to preview some protected site features.

<img src="https://i.imgur.com/FEUdfv2.png"/>

### Campsites

Flipcamp displays all relevant information a prospective camper may want to know about a campsite. Users can view, book, delete, and get directions to a campsite, with the added help of react-dates. Campsites can also be reviewed and show wether a reviewer generally recommends a camping spot or not.

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

## Future Plans and Implementations

In addition to adding AWS S3 photo services to allow new campsite listing creations, a simple user profile which shows user reviews can be added, as well as "saved spots" to allow a user to bookmark and come back to campsites they are interested in or particularly enjoyed.
