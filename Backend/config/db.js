require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
