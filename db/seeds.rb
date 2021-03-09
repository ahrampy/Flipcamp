# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Site.delete_all
Booking.delete_all
Review.delete_all

demo = User.create!(
    first_name: 'Traveler',
    last_name: 'Demos',
    email: 'demo',
    password: '123456'
)

adrian = User.create!(
    first_name: 'Adrian',
    last_name: 'Rampy',
    email: 'ahrampy@gmail.com',
    password: 'password'
)

john = User.create!(
    first_name: 'John',
    last_name: 'Muir',
    email: 'johnny@gmail.com',
    password: 'password'
)

site1 = Site.create!(
    user_id: demo.id,
    title: 'Yosemite',
    lat: 37.876251,
    lng: -119.458936,
    site_type: 'Camping',
    cost: 50,
    max_guests: 10,
    img: '/site_imgs/10-10.jpg',
    description: 'Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area.'
)

site2 = Site.create!(
    user_id: demo.id,
    title: 'El Capitan',
    lat: 37.733690,
    lng: -119.637659,
    site_type: 'Camping',
    cost: 60,
    max_guests: 6,
    img: '/site_imgs/10-11.jpg',
    description: 'El Capitan, also known as El Cap, is a vertical rock formation in Yosemite National Park, located on the north side of Yosemite Valley, near its western end. The granite monolith is about 3,000 feet from base to summit along its tallest face, and is a popular objective for rock climbers.'
)

site3 = Site.create!(
    user_id: demo.id,
    title: 'Sierra',
    lat: 39.668967,
    lng: -120.627021,
    site_type: 'Camping',
    cost: 30,
    max_guests: 8,
    img: '/site_imgs/10-12.jpg',
    description: 'The Sierra Nevada is a mountain range in the Western United States, between the Central Valley of California and the Great Basin. The vast majority of the range lies in the state of California, although the Carson Range spur lies primarily in Nevada.'
)

site4 = Site.create!(
    user_id: demo.id,
    title: 'High Sierra',
    lat: 39.593693,
    lng: -120.646809,
    site_type: 'Camping',
    cost: 30,
    max_guests: 8,
    img: '/site_imgs/10-13.jpg',
    description: 'The Sierra Nevada is a mountain range in the Western United States, between the Central Valley of California and the Great Basin. The vast majority of the range lies in the state of California, although the Carson Range spur lies primarily in Nevada.'
)

site5 = Site.create!(
    user_id: demo.id,
    title: 'Mojave',
    lat: 35.010660,
    lng: -115.472970,
    site_type: 'Camping',
    cost: 40,
    max_guests: 2,
    img: '/site_imgs/10-14.jpg',
    description: 'The Mojave Desert is an arid rain-shadow desert and the driest desert in North America. It is in the North American Southwest, primarily within southeastern California and southern Nevada, and it occupies 47,877 sq mi. Small areas also extend into Utah and Arizona.'
)

site6 = Site.create!(
    user_id: demo.id,
    title: 'Catalina',
    lat: 33.385920,
    lng: -118.416661,
    site_type: 'Camping',
    cost: 100,
    max_guests: 3,
    img: '/site_imgs/10-15.jpg',
    description: 'Santa Catalina, one of California’s Channel Islands, lies southwest of Los Angeles. It is known for its wildlife, dive sites and Mt. Orizaba, its highest peak. The resort town of Two Harbors lies to the north. To the south, in the city of Avalon, palm trees and cabanas line Descanso Beach. Avalon’s circular, art deco Catalina Casino is a cultural center with a movie theater, ballroom and museum.'
)

site6 = Site.create!(
    user_id: demo.id,
    title: 'Big Sur',
    lat: 36.271862,
    lng: -121.800190,
    site_type: 'RV',
    cost: 40,
    max_guests: 4,
    img: '/site_imgs/10-16.jpg',
    description: 'Big Sur is a rugged stretch of California’s central coast between Carmel and San Simeon. Bordered to the east by the Santa Lucia Mountains and the west by the Pacific Ocean, it’s traversed by narrow, 2-lane State Route 1, known for winding turns, seaside cliffs and views of the often-misty coastline. The sparsely populated region has numerous state parks for hiking, camping and beachcombing.'
)

booking1 = Booking.create!(
    site_id: site1.id,
    user_id: demo.id,
    check_in: '2019-10-01',
    check_out: '2019-10-04',
    num_guests: 2
)

review1 = Review.create!(
    site_id: site1.id,
    user_id: demo.id,
    author: demo.first_name,
    recommend: true,
    body: "The first place I ever camped, can't beat it!"
)

review2 = Review.create!(
    site_id: site1.id,
    user_id: adrian.id,
    author: adrian.first_name,
    recommend: true,
    body: "B-E-A-utiful views."
)

review3 = Review.create!(
    site_id: site1.id,
    user_id: john.id,
    author: john.first_name,
    recommend: false,
    body: "Pretty sure I found this?"
)