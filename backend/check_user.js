const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const checkUser = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to:', mongoose.connection.name);
        const users = await User.find();
        console.log('Total users in DB:', users.length);
        const user = await User.findOne({ email: 'finaltest@example.com' });
        if (user) {
            console.log('User found:', user);
        } else {
            console.log('User finaltest@example.com not found');
            if (users.length > 0) {
                console.log('Sample user:', users[0]);
            }
        }
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkUser();
