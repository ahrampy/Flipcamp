# Flipcamp

[Flipcamp Live](https://flipcamp.herokuapp.com/#/)

Flipcamp is a site clone of Hipcamp, an online marketplace that helps people find and book campsites directly from landowners.


## Technoligies

* PostgreSQL
* Ruby on Rails
* React.js
* Redux.js
* Node.js
* JBuilder
* Webpack
* Google Maps API
* Amazon AWS S3*

Flipcamp was built with a Ruby on Rails framework, utilizing PostgresSQL for organized data storage, and the React and Redux libraries for dynamic frontend, single-page app navigation and interactivity. It includes the Google Maps API and is planned to fully integrate Amazon Web Services' S3 photo storage to allow image uploading without impacting site performance. 


## Features

### User Authorization

Flipcamp uses BCrypt's secure password auth pattern, allowing users to safely sign up as well as sign back in to access their listings and camp reservations. A demo user is also provided to preview some protected site features.

<img src="https://i.imgur.com/FEUdfv2.png"/>

### Campsites

Flipcamp displays all relevant information a prospective camper may want to know about a campsite. Users can view, book, delete, and get directions to a campsite, with the added help of React-Dates. Campsites can also be reviewed and will always show the reviews they have recieved.

<p align="center">
  <img width="410" height="300" src="https://i.imgur.com/pKhc67f.png"/>
  <img width="370" height="300" src="https://i.imgur.com/oeaA62M.png"/>
</p>

