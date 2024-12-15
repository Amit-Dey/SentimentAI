require('dotenv').config();
const Feedback = require('../models/feedback');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.G_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" },
    generation_config = { "response_mime_type": "application/json" }
);
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node')


const submitFeedback = async (req, res) => {
    const { name, email, feedback } = req.body;

    // Check if user is logged in
    ClerkExpressRequireAuth({
        apiKey: process.env.CLERK_PUBLISHABLE_KEY,
        onUnauthenticated: () => {
            res.status(401).json({ message: 'User not authenticated' });
        }
    })

    // Call AI API to analyze sentiment of the feedback
    const prompt = `Analyze the sentiment of the sentence given below.\n${feedback}\nOutput using this JSON schema:

Sentiment = {'sentimentType': string}
Return: Sentiment`;

    const result = await model.generateContent(prompt);
    let jsonData = result.response.text();
    jsonData = jsonData.replace(/```json/g, '');
    jsonData = jsonData.replace(/```/g, '');
    // console.log(jsonData);

    const sentiment = JSON.parse(jsonData).Sentiment.sentimentType;
    // console.log(sentiment);

    // Store feedback and sentiment in the database
    const newFeedback = new Feedback({
        name,
        email,
        feedback,
        sentiment,
    });

    try {
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', sentiment });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback' });
    }
};

module.exports = { submitFeedback };
