const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const registerManual = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to:', mongoose.connection.name);

        const userData = {
            name: 'Manual Test',
            email: 'manual@example.com',
            password: 'password123'
        };

        const user = new User(userData);
        await user.save();
        console.log('User saved manually:', user._id);

        const found = await User.findOne({ email: 'manual@example.com' });
        console.log('Verification found:', found ? found.email : 'NOT FOUND');

        process.exit();
    } catch (err) {
        console.error('Manual Registration Error:', err);
        process.exit(1);
    }
};

registerManual();
