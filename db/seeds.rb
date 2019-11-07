# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Site.delete_all

demo = User.create!(
    first_name: 'Traveler',
    last_name: 'Demos',
    email: 'demo',
    password: '123456'
)

site1 = Site.create!(
    user_id: demo.id,
    title: 'Yosemite',
    lat: 37.876251,
    lng: -119.458936,
    site_type: 'Camping',
    cost: 50,
    max_guests: 10,
    img: '/site_imgs/10-10.jpg'
)

site2 = Site.create!(
    user_id: demo.id,
    title: 'El Capitan',
    lat: 37.733690,
    lng: -119.637659,
    site_type: 'Camping',
    cost: 60,
    max_guests: 6,
    img: '/site_imgs/10-11.jpg'
)

site3 = Site.create!(
    user_id: demo.id,
    title: 'Sierra',
    lat: 39.668967,
    lng: -120.627021,
    site_type: 'Camping',
    cost: 30,
    max_guests: 8,
    img: '/site_imgs/10-12.jpg'
)

site4 = Site.create!(
    user_id: demo.id,
    title: 'High Sierra',
    lat: 39.593693,
    lng: -120.646809,
    site_type: 'Camping',
    cost: 30,
    max_guests: 8,
    img: '/site_imgs/10-13.jpg'
)

site5 = Site.create!(
    user_id: demo.id,
    title: 'Mojave',
    lat: 35.010660,
    lng: -115.472970,
    site_type: 'Camping',
    cost: 40,
    max_guests: 2,
    img: '/site_imgs/10-14.jpg'
)

site6 = Site.create!(
    user_id: demo.id,
    title: 'Catalina',
    lat: 33.385920,
    lng: -118.416661,
    site_type: 'Camping',
    cost: 100,
    max_guests: 3,
    img: '/site_imgs/10-15.jpg'
)