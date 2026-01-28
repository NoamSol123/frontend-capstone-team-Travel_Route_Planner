/ src/js/data.js

const attractionsData = [
    // --- FRANCE 🇫🇷 ---
    { 
        id: 101, 
        name: "Eiffel Tower VIP Tour", 
        country: "France", 
        price: 30, 
        duration: 3, 
        image: "https://placehold.co/600x400/3498db/white?text=Eiffel+Tower", 
        description: "Skip-the-line access to the summit with champagne." 
    },
    { 
        id: 102, 
        name: "Louvre Museum", 
        country: "France", 
        price: 17, 
        duration: 4, 
        image: "https://placehold.co/600x400/3498db/white?text=Louvre+Museum", 
        description: "Private guided tour of the world's largest art museum." 
    },
    { 
        id: 103, 
        name: "Seine Sunset Cruise", 
        country: "France", 
        price: 45, 
        duration: 2, 
        image: "https://placehold.co/600x400/3498db/white?text=Seine+Cruise", 
        description: "Romantic dinner cruise along the river Seine." 
    },
    { 
        id: 104, 
        name: "Palace of Versailles", 
        country: "France", 
        price: 25, 
        duration: 5, 
        image: "https://placehold.co/600x400/3498db/white?text=Versailles", 
        description: "Explore the royal apartments and Hall of Mirrors." 
    },
    { 
        id: 105, 
        name: "Disneyland Paris", 
        country: "France", 
        price: 110, 
        duration: 8, 
        image: "https://placehold.co/600x400/3498db/white?text=Disneyland", 
        description: "A magical day trip to the famous theme park." 
    },
    { 
        id: 106, 
        name: "Mont Saint-Michel", 
        country: "France", 
        price: 40, 
        duration: 6, 
        image: "https://placehold.co/600x400/3498db/white?text=Mont+St+Michel", 
        description: "Historic abbey located on a tidal island." 
    },
    { 
        id: 107, 
        name: "Arc de Triomphe", 
        country: "France", 
        price: 13, 
        duration: 1, 
        image: "https://placehold.co/600x400/3498db/white?text=Arc+de+Triomphe", 
        description: "Panoramic views from the top of the monument." 
    },
    { 
        id: 108, 
        name: "Moulin Rouge Show", 
        country: "France", 
        price: 120, 
        duration: 3, 
        image: "https://placehold.co/600x400/3498db/white?text=Moulin+Rouge", 
        description: "The world's most famous cabaret experience." 
    },

    // --- ITALY 🇮🇹 ---
    { 
        id: 201, 
        name: "Colosseum Underground", 
        country: "Italy", 
        price: 50, 
        duration: 2, 
        image: "https://placehold.co/600x400/27ae60/white?text=Colosseum", 
        description: "Exclusive access to the gladiator arena floor." 
    },
    { 
        id: 202, 
        name: "Venice Gondola Ride", 
        country: "Italy", 
        price: 80, 
        duration: 1, 
        image: "https://placehold.co/600x400/27ae60/white?text=Gondola", 
        description: "Classic private boat ride through Venetian canals." 
    },
    { 
        id: 203, 
        name: "Leaning Tower of Pisa", 
        country: "Italy", 
        price: 18, 
        duration: 2, 
        image: "https://placehold.co/600x400/27ae60/white?text=Pisa+Tower", 
        description: "Climb the famous tilting bell tower." 
    },
    { 
        id: 204, 
        name: "Vatican & Sistine Chapel", 
        country: "Italy", 
        price: 35, 
        duration: 4, 
        image: "https://placehold.co/600x400/27ae60/white?text=Vatican", 
        description: "See Michelangelo's masterpiece without the crowds." 
    },
    { 
        id: 205, 
        name: "Pompeii Ruins Tour", 
        country: "Italy", 
        price: 22, 
        duration: 4, 
        image: "https://placehold.co/600x400/27ae60/white?text=Pompeii", 
        description: "Walk through the ancient roman city frozen in time." 
    },
    { 
        id: 206, 
        name: "Florence Duomo Climb", 
        country: "Italy", 
        price: 25, 
        duration: 2, 
        image: "https://placehold.co/600x400/27ae60/white?text=Duomo", 
        description: "Breathtaking views from Brunelleschi's dome." 
    },
    { 
        id: 207, 
        name: "Amalfi Coast Drive", 
        country: "Italy", 
        price: 100, 
        duration: 8, 
        image: "https://placehold.co/600x400/27ae60/white?text=Amalfi", 
        description: "Luxury private driver along the scenic coast." 
    },
    { 
        id: 208, 
        name: "Authentic Pizza Class", 
        country: "Italy", 
        price: 60, 
        duration: 3, 
        image: "https://placehold.co/600x400/27ae60/white?text=Pizza+Class", 
        description: "Learn to make Neapolitan pizza from scratch." 
    },

    // --- USA 🇺🇸 ---
    { 
        id: 301, 
        name: "Statue of Liberty Crown", 
        country: "USA", 
        price: 25, 
        duration: 3, 
        image: "https://placehold.co/600x400/c0392b/white?text=Liberty", 
        description: "Ferry ride and access to the crown of Lady Liberty." 
    },
    { 
        id: 302, 
        name: "Grand Canyon Helicopter", 
        country: "USA", 
        price: 250, 
        duration: 2, 
        image: "https://placehold.co/600x400/c0392b/white?text=Grand+Canyon", 
        description: "Scenic flight over the majestic canyon rim." 
    },
    { 
        id: 303, 
        name: "Universal Studios VIP", 
        country: "USA", 
        price: 350, 
        duration: 7, 
        image: "https://placehold.co/600x400/c0392b/white?text=Universal", 
        description: "Front-of-line access to all rides and shows." 
    },
    { 
        id: 304, 
        name: "Central Park Bike Tour", 
        country: "USA", 
        price: 20, 
        duration: 2, 
        image: "https://placehold.co/600x400/c0392b/white?text=Central+Park", 
        description: "Guided cycling tour through NYC's green lung." 
    },
    { 
        id: 305, 
        name: "Golden Gate Bridge Cruise", 
        country: "USA", 
        price: 40, 
        duration: 1, 
        image: "https://placehold.co/600x400/c0392b/white?text=Golden+Gate", 
        description: "Sail under the iconic red bridge in San Francisco." 
    },
    { 
        id: 306, 
        name: "Broadway Show", 
        country: "USA", 
        price: 150, 
        duration: 3, 
        image: "https://placehold.co/600x400/c0392b/white?text=Broadway", 
        description: "Premium seats to a top NYC musical." 
    },
    { 
        id: 307, 
        name: "Las Vegas High Roller", 
        country: "USA", 
        price: 35, 
        duration: 1, 
        image: "https://placehold.co/600x400/c0392b/white?text=Vegas", 
        description: "Ride the world's tallest observation wheel." 
    },
    { 
        id: 308, 
        name: "Kennedy Space Center", 
        country: "USA", 
        price: 60, 
        duration: 6, 
        image: "https://placehold.co/600x400/c0392b/white?text=NASA", 
        description: "Meet an astronaut and see real space shuttles." 
    },

    // --- JAPAN 🇯🇵 ---
    { 
        id: 401, 
        name: "Mt. Fuji & Hakone", 
        country: "Japan", 
        price: 120, 
        duration: 9, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Mt+Fuji", 
        description: "Full day tour including bullet train and lake cruise." 
    },
    { 
        id: 402, 
        name: "Tokyo Skytree", 
        country: "Japan", 
        price: 25, 
        duration: 2, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Skytree", 
        description: "Skip the line to the highest observation deck." 
    },
    { 
        id: 403, 
        name: "Kyoto Tea Ceremony", 
        country: "Japan", 
        price: 40, 
        duration: 1, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Tea+Ceremony", 
        description: "Experience traditional Japanese matcha culture." 
    },
    { 
        id: 404, 
        name: "Sushi Masterclass", 
        country: "Japan", 
        price: 90, 
        duration: 3, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Sushi", 
        description: "Learn to make sushi from a Tokyo master chef." 
    },
    { 
        id: 405, 
        name: "Akihabara Tech Tour", 
        country: "Japan", 
        price: 0, 
        duration: 3, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Akihabara", 
        description: "Guided walk through the electric town." 
    },
    { 
        id: 406, 
        name: "Nara Deer Park", 
        country: "Japan", 
        price: 10, 
        duration: 2, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Nara+Deer", 
        description: "Feed and interact with wild bowing deer." 
    },
    { 
        id: 407, 
        name: "Osaka Castle", 
        country: "Japan", 
        price: 10, 
        duration: 2, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Osaka+Castle", 
        description: "Visit the historic samurai fortress." 
    },
    { 
        id: 408, 
        name: "Robot Restaurant", 
        country: "Japan", 
        price: 70, 
        duration: 2, 
        image: "https://placehold.co/600x400/8e44ad/white?text=Robot+Show", 
        description: "Crazy neon show with robots and dancers." 
    },

    // --- UK 🇬🇧 ---
    { 
        id: 501, 
        name: "London Eye Champagne", 
        country: "UK", 
        price: 45, 
        duration: 1, 
        image: "https://placehold.co/600x400/f39c12/white?text=London+Eye", 
        description: "Private capsule ride with city views." 
    },
    { 
        id: 502, 
        name: "British Museum Tour", 
        country: "UK", 
        price: 20, 
        duration: 3, 
        image: "https://placehold.co/600x400/f39c12/white?text=British+Museum", 
        description: "Expert led tour of human history highlights." 
    },
    { 
        id: 503, 
        name: "Tower of London", 
        country: "UK", 
        price: 30, 
        duration: 3, 
        image: "https://placehold.co/600x400/f39c12/white?text=Tower+of+London", 
        description: "See the Crown Jewels and meet the Beefeaters." 
    },
    { 
        id: 504, 
        name: "Stonehenge Sunset", 
        country: "UK", 
        price: 35, 
        duration: 4, 
        image: "https://placehold.co/600x400/f39c12/white?text=Stonehenge", 
        description: "Private inner circle access to the stones." 
    },
    { 
        id: 505, 
        name: "Harry Potter Studios", 
        country: "UK", 
        price: 80, 
        duration: 5, 
        image: "https://placehold.co/600x400/f39c12/white?text=Harry+Potter", 
        description: "The making of Harry Potter - full studio tour." 
    },
    { 
        id: 506, 
        name: "Buckingham Palace", 
        country: "UK", 
        price: 30, 
        duration: 2, 
        image: "https://placehold.co/600x400/f39c12/white?text=Buckingham", 
        description: "Tour the State Rooms of the King's residence." 
    },
    { 
        id: 507, 
        name: "Edinburgh Castle", 
        country: "UK", 
        price: 25, 
        duration: 3, 
        image: "https://placehold.co/600x400/f39c12/white?text=Edinburgh", 
        description: "Historic fortress dominating the skyline." 
    },
    { 
        id: 508, 
        name: "The Beatles Story", 
        country: "UK", 
        price: 20, 
        duration: 2, 
        image: "https://placehold.co/600x400/f39c12/white?text=The+Beatles", 
        description: "Immersive exhibition in Liverpool." 
    }
];