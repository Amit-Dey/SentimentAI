# SentimentAI – Real-Time Feedback Analysis

**SentimentAI** is a real-time feedback analysis system that uses AI to analyze user feedback and categorize it into three sentiment types: positive, negative, and neutral. This project includes both the **frontend** and **backend** components, which work together to provide a seamless feedback experience.

---

## Features
- **AI-Powered Sentiment Analysis**: Uses AI to analyze user-submitted feedback and determine sentiment.
- **Real-Time Feedback**: Immediate analysis of feedback as it's submitted.
- **Positive, Negative, Neutral Categorization**: Provides instant feedback classification into three categories.
- **User Interface**: Intuitive and easy-to-use frontend to submit feedback.
- **API Integration**: A backend that handles feedback data and sentiment analysis requests.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **JavaScript, HTML, CSS**: Core technologies for frontend development.

### Backend
- **Node.js**: For handling backend operations and API requests.
- **Express.js**: Web framework to create API endpoints.
- **AI Model**: Utilizes a trained model for sentiment analysis (e.g., Natural Language Processing techniques).

---

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Amit-Dey/AI-Feedback-Backend.git
   ```
2. Install dependencies:
   ```bash
   cd AI-Feedback-Backend
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
The backend will now be running on http://localhost:5000 (or the port you’ve configured).

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Amit-Dey/AI-Feedback-Frontend.git
   ```
2. Install dependencies:
   ```bash
   cd AI-Feedback-Frontend
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```
The frontend will now be running on http://localhost:3000.

### How It Works
1. User submits feedback via the frontend interface.
2. The feedback is sent to the backend API, which processes it through an AI model for sentiment analysis.
3. The backend returns the sentiment result (positive, negative, neutral).
4. The frontend displays the sentiment result to the user in real-time.

### Contributions
Feel free to fork the repository, open issues, and submit pull requests for improvements or bug fixes. Contributions are welcome!

### License
This project is licensed under the MIT License.
