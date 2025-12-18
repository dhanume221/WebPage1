const mongoose = require('mongoose');
const Property = require('./models/Property');
require('dotenv').config();

const properties = [
    {
        title: "Villa Ocean Breeze",
        location: "Palm Jumeirah",
        price: 3500,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"],
        description: "Experience luxury living in this stunning beachfront villa.",
        features: { bedrooms: 5, bathrooms: 6, guests: 10, area: 5000 },
        amenities: ["Pool", "Gym", "Beach Access", "WiFi"],
        featured: true
    },
    {
        title: "Downtown Penthouse",
        location: "Downtown Dubai",
        price: 2800,
        rating: 4.9,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"],
        description: "Modern penthouse with breathtaking views of the Burj Khalifa.",
        features: { bedrooms: 3, bathrooms: 3, guests: 6, area: 2500 },
        amenities: ["Balcony", "Smart Home", "Concierge", "Parking"],
        featured: true
    },
    {
        title: "Desert Oasis Retreat",
        location: "Arabian Ranches",
        price: 1800,
        rating: 4.7,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"],
        description: "Peaceful family villa with lush gardens and private pool.",
        features: { bedrooms: 4, bathrooms: 4, guests: 8, area: 3500 },
        amenities: ["Garden", "BBQ Area", "Pool", "Pet Friendly"],
        featured: false
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ventura_stays');
        console.log('MongoDB Connected for seeding');

        await Property.deleteMany({});
        console.log('Cleared Property collection');

        await Property.insertMany(properties);
        console.log('Seeded properties');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
