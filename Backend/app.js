const express = require('express');
const feedbackRoutes = require('./routes/feedbackRoutes');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const app = express();

// Middleware
app.use(cors({}));
app.use(express.json());  // To handle JSON requests

// Connect to the database
connectDB();


// Initialize Clerk middleware with environment keys
app.use(ClerkExpressWithAuth({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY
}));


// Routes
app.use('/api/feedback', feedbackRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' });
});


module.exports = app;
