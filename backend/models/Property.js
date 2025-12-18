const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    },
    images: [String],
    description: String,
    features: {
        bedrooms: Number,
        bathrooms: Number,
        guests: Number,
        area: Number,
    },
    amenities: [String],
    featured: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Property', PropertySchema);
