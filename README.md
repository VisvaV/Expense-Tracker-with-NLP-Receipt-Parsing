# Smart Expense Tracker with NLP Receipt Parsing

A comprehensive expense tracking application that uses Natural Language Processing (NLP) to automatically extract and categorize expense information from receipts. The application includes a chatbot feature that allows users to query their expense data using natural language.

## Features

- User authentication with JWT
- Receipt image upload and OCR text extraction
- NLP-based receipt parsing to extract expense details
- Expense management (create, read, update, delete)
- Expense filtering by category and date range
- Export expenses to CSV and PDF formats
- Chatbot interface for natural language queries about expenses

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security with JWT
- MongoDB for data storage
- Tesseract OCR for image text extraction
- Google Gemini API for NLP processing

### Frontend
- React.js
- Material-UI
- Chart.js for data visualization
- Axios for API communication

## Prerequisites

- Java 17 or higher
- MongoDB
- Node.js and npm
- Tesseract OCR
- Google Gemini API key

## Setup Instructions

### Backend Setup

1. Clone the repository
2. Navigate to the backend directory
3. Configure MongoDB connection in `application.properties`
4. Set up Tesseract OCR and update the data path in `application.properties`
5. Obtain a Google Gemini API key and add it to `application.properties`
6. Build the project: `./mvnw clean install`
7. Run the application: `./mvnw spring-boot:run`

### Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login and get JWT token

### Expenses
- POST `/api/receipts/upload` - Upload and process receipt image
- POST `/api/receipts/text` - Process receipt text
- POST `/api/receipts` - Save a new expense
- GET `/api/receipts` - Get all expenses for the authenticated user
- GET `/api/receipts/filter` - Filter expenses by category and/or date range
- GET `/api/receipts/export/csv` - Export expenses to CSV
- GET `/api/receipts/export/pdf` - Export expenses to PDF
- DELETE `/api/receipts/{expenseId}` - Delete an expense

### Chatbot
- POST `/api/chatbot/ask` - Send a query to the chatbot
- DELETE `/api/chatbot/sessions/{sessionId}` - Delete a chat session
