require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5005;

// CORS Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://www.render.com',
        // Add your frontend deployment URL here (e.g., Vercel, Netlify)
        // 'https://your-frontend-app.vercel.app'
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Database Connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ventura_stays';
console.log('Connecting to MongoDB...');
mongoose.connect(dbURI)
    .then(() => {
        console.log('MongoDB Connected');
        console.log(`Connected to database: ${mongoose.connection.name}`);
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/properties', require('./routes/properties'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/auth', require('./routes/auth'));

// Basic Route
app.get('/', (req, res) => {
    res.send('Ventura Stays API is running');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please try another port.`);
    } else {
        console.error('SERVER ERROR:', err);
    }
});
