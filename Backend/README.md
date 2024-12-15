# AI-Powered Real-Time Feedback System - Backend

This is the backend repository for the AI-Powered Real-Time Feedback System. It handles user feedback submissions and integrates with an AI service to analyze the sentiment of the feedback in real-time.

## Features

- RESTful API to handle feedback submission.
- Integration with third-party AI services (e.g., OpenAI, Google Cloud Natural Language) for sentiment analysis.
- Database storage for feedback and analysis results (using **MongoDB** or **PostgreSQL**).
- CI/CD pipeline integrated with **GitHub Actions** for continuous testing and deployment.

## Tech Stack

- **Node.js**: JavaScript runtime for backend logic.
- **Express.js**: Web framework for building APIs.
- **MongoDB** / **PostgreSQL**: For data storage.
- **GitHub Actions**: For continuous integration and deployment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (comes with Node.js)
- **MongoDB** or **PostgreSQL** (depending on the chosen database)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/YourUsername/AI-Feedback-Backend.git
    ```
2. Navigate to the project directory:

   ```bash
   cd AI-Feedback-Backend
   ```
3. Install the dependencies:

   ```bash
    npm install
    ```
4. Set up your environment variables by creating a .env file in the root directory:
   ```bash
   touch .env
   ```
   Add the following environment variables to the .env file:
   ```
   PORT=5000
   DB_URI=mongodb://localhost:27017/feedback-app  # or PostgreSQL URI
   AI_API_KEY=your-ai-api-key
   ```
## Running the Application
To start the Express server:
```bash
npm start
```
The API will be available at http://localhost:5000.

## Running Tests
To run the test suite:    
```bash
npm test
```
## API Endpoints
- POST /api/feedback: Submit feedback and get real-time sentiment analysis.
    - Body parameters:
        - name: User's name
        - email: User's email
        - feedback: Feedback text
Example request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "feedback": "This is awesome!"
}
```

## CI/CD Pipeline
The repository is set up with a GitHub Actions pipeline. It automatically runs tests and deploys the code whenever changes are pushed to the main branch or a pull request is created.

## Contributing
Feel free to fork this project, submit issues, or create pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).
