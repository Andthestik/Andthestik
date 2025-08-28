# MinuteMate

A minimal microSaaS example that summarizes meeting transcripts into action items using the OpenAI API.

## Running Locally

1. Install backend dependencies and start the server:
   ```bash
   cd backend
   npm install
   npm start
   ```
   Set `OPENAI_API_KEY` in your environment before starting.

2. Open the frontend:
   ```bash
   cd ../frontend
   npx serve .
   ```
   Then visit `http://localhost:3000` and ensure the backend is running at `http://localhost:3001`.

This repository is an MVP prototype created by the assistant.
