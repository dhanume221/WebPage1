const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET user bookings
router.get('/my-bookings', auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.json(bookings);
    } catch (err) {
        console.error('Fetch Bookings Error:', err);
        res.status(500).json({ message: err.message });
    }
});

// POST create booking
router.post('/', auth, async (req, res) => {
    try {
        const { propertyId, checkIn, checkOut, guests, totalPrice } = req.body;

        const booking = new Booking({
            propertyId,
            userId: req.user.id,
            checkIn,
            checkOut,
            guests,
            totalPrice
        });

        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        console.error('Booking Error:', err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
