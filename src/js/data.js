// src/js/data.js

'use strict';

const attractionsData = [

    // ── FRANCE 🇫🇷 ─────────────────────────────────────────────
    {
        id: 101,
        name: "Eiffel Tower VIP Tour",
        country: "France",
        price: 30,
        duration: 3,
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=600&q=70",
        description: "Skip-the-line access to the summit with champagne."
    },
    {
        id: 102,
        name: "Louvre Museum",
        country: "France",
        price: 17,
        duration: 4,
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=600&q=70",
        description: "Private guided tour of the world's largest art museum."
    },
    {
        id: 103,
        name: "Seine Sunset Cruise",
        country: "France",
        price: 45,
        duration: 2,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=70",
        description: "Romantic dinner cruise along the river Seine."
    },
    {
        id: 104,
        name: "Palace of Versailles",
        country: "France",
        price: 25,
        duration: 5,
        image: "https://images.unsplash.com/photo-1597990050248-898e529ea07b?auto=format&fit=crop&w=600&q=70",
        description: "Explore the royal apartments and Hall of Mirrors."
    },
    {
        id: 105,
        name: "Disneyland Paris",
        country: "France",
        price: 110,
        duration: 8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=70",
        description: "A magical day trip to the famous theme park."
    },
    {
        id: 106,
        name: "Mont Saint-Michel",
        country: "France",
        price: 40,
        duration: 6,
        image: "https://images.unsplash.com/photo-1589983624149-b3a8bc2ea37e?auto=format&fit=crop&w=600&q=70",
        description: "Historic abbey located on a tidal island."
    },
    {
        id: 107,
        name: "Arc de Triomphe",
        country: "France",
        price: 13,
        duration: 1,
        image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?auto=format&fit=crop&w=600&q=70",
        description: "Panoramic views from the top of the monument."
    },
    {
        id: 108,
        name: "Moulin Rouge Show",
        country: "France",
        price: 120,
        duration: 3,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=70",
        description: "The world's most famous cabaret experience."
    },

    // ── ITALY 🇮🇹 ──────────────────────────────────────────────
    {
        id: 201,
        name: "Colosseum Underground",
        country: "Italy",
        price: 50,
        duration: 2,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=70",
        description: "Exclusive access to the gladiator arena floor."
    },
    {
        id: 202,
        name: "Venice Gondola Ride",
        country: "Italy",
        price: 80,
        duration: 1,
        image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=600&q=70",
        description: "Classic private boat ride through Venetian canals."
    },
    {
        id: 203,
        name: "Leaning Tower of Pisa",
        country: "Italy",
        price: 18,
        duration: 2,
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=70",
        description: "Climb the famous tilting bell tower."
    },
    {
        id: 204,
        name: "Vatican & Sistine Chapel",
        country: "Italy",
        price: 35,
        duration: 4,
        image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=70",
        description: "See Michelangelo's masterpiece without the crowds."
    },
    {
        id: 205,
        name: "Pompeii Ruins Tour",
        country: "Italy",
        price: 22,
        duration: 4,
        image: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?auto=format&fit=crop&w=600&q=70",
        description: "Walk through the ancient Roman city frozen in time."
    },
    {
        id: 206,
        name: "Florence Duomo Climb",
        country: "Italy",
        price: 25,
        duration: 2,
        image: "https://images.unsplash.com/photo-1534445538923-ab9b3b39ae22?auto=format&fit=crop&w=600&q=70",
        description: "Breathtaking views from Brunelleschi's dome."
    },
    {
        id: 207,
        name: "Amalfi Coast Drive",
        country: "Italy",
        price: 100,
        duration: 8,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=70",
        description: "Luxury private driver along the scenic coast."
    },
    {
        id: 208,
        name: "Authentic Pizza Class",
        country: "Italy",
        price: 60,
        duration: 3,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=70",
        description: "Learn to make Neapolitan pizza from scratch."
    },

    // ── USA 🇺🇸 ────────────────────────────────────────────────
    {
        id: 301,
        name: "Statue of Liberty Crown",
        country: "USA",
        price: 25,
        duration: 3,
        image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&w=600&q=70",
        description: "Ferry ride and access to the crown of Lady Liberty."
    },
    {
        id: 302,
        name: "Grand Canyon Helicopter",
        country: "USA",
        price: 250,
        duration: 2,
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=600&q=70",
        description: "Scenic flight over the majestic canyon rim."
    },
    {
        id: 303,
        name: "Universal Studios VIP",
        country: "USA",
        price: 350,
        duration: 7,
        image: "https://images.unsplash.com/photo-1617609049956-98c3ec6eb17c?auto=format&fit=crop&w=600&q=70",
        description: "Front-of-line access to all rides and shows."
    },
    {
        id: 304,
        name: "Central Park Bike Tour",
        country: "USA",
        price: 20,
        duration: 2,
        image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=600&q=70",
        description: "Guided cycling tour through NYC's green lung."
    },
    {
        id: 305,
        name: "Golden Gate Bridge Cruise",
        country: "USA",
        price: 40,
        duration: 1,
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=70",
        description: "Sail under the iconic red bridge in San Francisco."
    },
    {
        id: 306,
        name: "Broadway Show",
        country: "USA",
        price: 150,
        duration: 3,
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=70",
        description: "Premium seats to a top NYC musical."
    },
    {
        id: 307,
        name: "Las Vegas High Roller",
        country: "USA",
        price: 35,
        duration: 1,
        image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=600&q=70",
        description: "Ride the world's tallest observation wheel."
    },
    {
        id: 308,
        name: "Kennedy Space Center",
        country: "USA",
        price: 60,
        duration: 6,
        image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=70",
        description: "Meet an astronaut and see real space shuttles."
    },

    // ── JAPAN 🇯🇵 ──────────────────────────────────────────────
    {
        id: 401,
        name: "Mt. Fuji & Hakone",
        country: "Japan",
        price: 120,
        duration: 9,
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=600&q=70",
        description: "Full day tour including bullet train and lake cruise."
    },
    {
        id: 402,
        name: "Tokyo Skytree",
        country: "Japan",
        price: 25,
        duration: 2,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=70",
        description: "Skip the line to the highest observation deck."
    },
    {
        id: 403,
        name: "Kyoto Tea Ceremony",
        country: "Japan",
        price: 40,
        duration: 1,
        image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=600&q=70",
        description: "Experience traditional Japanese matcha culture."
    },
    {
        id: 404,
        name: "Sushi Masterclass",
        country: "Japan",
        price: 90,
        duration: 3,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=70",
        description: "Learn to make sushi from a Tokyo master chef."
    },
    {
        id: 405,
        name: "Akihabara Tech Tour",
        country: "Japan",
        price: 0,
        duration: 3,
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=70",
        description: "Guided walk through the electric town."
    },
    {
        id: 406,
        name: "Nara Deer Park",
        country: "Japan",
        price: 10,
        duration: 2,
        image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=600&q=70",
        description: "Feed and interact with wild bowing deer."
    },
    {
        id: 407,
        name: "Osaka Castle",
        country: "Japan",
        price: 10,
        duration: 2,
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=600&q=70",
        description: "Visit the historic samurai fortress."
    },
    {
        id: 408,
        name: "Robot Restaurant",
        country: "Japan",
        price: 70,
        duration: 2,
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=70",
        description: "Crazy neon show with robots and dancers."
    },

    // ── UK 🇬🇧 ─────────────────────────────────────────────────
    {
        id: 501,
        name: "London Eye Champagne",
        country: "UK",
        price: 45,
        duration: 1,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=70",
        description: "Private capsule ride with breathtaking city views."
    },
    {
        id: 502,
        name: "British Museum Tour",
        country: "UK",
        price: 20,
        duration: 3,
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=70",
        description: "Expert-led tour of human history highlights."
    },
    {
        id: 503,
        name: "Tower of London",
        country: "UK",
        price: 30,
        duration: 3,
        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=70",
        description: "See the Crown Jewels and meet the Beefeaters."
    },
    {
        id: 504,
        name: "Stonehenge Sunset",
        country: "UK",
        price: 35,
        duration: 4,
        image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=600&q=70",
        description: "Private inner-circle access to the ancient stones."
    },
    {
        id: 505,
        name: "Harry Potter Studios",
        country: "UK",
        price: 80,
        duration: 5,
        image: "https://images.unsplash.com/photo-1559329255-7c00b628c0a5?auto=format&fit=crop&w=600&q=70",
        description: "The making of Harry Potter — full studio tour."
    },
    {
        id: 506,
        name: "Buckingham Palace",
        country: "UK",
        price: 30,
        duration: 2,
        image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=600&q=70",
        description: "Tour the State Rooms of the King's residence."
    },
    {
        id: 507,
        name: "Edinburgh Castle",
        country: "UK",
        price: 25,
        duration: 3,
        image: "https://images.unsplash.com/photo-1598018553943-029f894d54dc?auto=format&fit=crop&w=600&q=70",
        description: "Historic fortress dominating the Edinburgh skyline."
    },
    {
        id: 508,
        name: "The Beatles Story",
        country: "UK",
        price: 20,
        duration: 2,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=70",
        description: "Immersive exhibition in the heart of Liverpool."
    }
];