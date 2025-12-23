# Student Record Management System

A simple REST API based student record management system built with Node.js, Express, MongoDB, and basic HTML frontend.

**This project is created by Sharansh Jha as part of learning REST APIs, backend development, and CRUD operations.**

## Project Overview

This is a beginner-level backend project that demonstrates how to build RESTful APIs for managing student records. The project includes a Node.js backend with Express and MongoDB, along with a simple HTML frontend using Tailwind CSS.

## Features

- Add new student records
- View all students
- Update student details
- Delete student records
- Simple and clean user interface
- RESTful API architecture
- JSON responses

## REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/students` | Add a new student |
| GET | `/api/v1/students` | Get all students |
| PUT | `/api/v1/students/:id` | Update student by ID |
| DELETE | `/api/v1/students/:id` | Delete student by ID |

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- HTML
- Tailwind CSS (via CDN)
- Vanilla JavaScript (Fetch API)

### Tools
- Postman (for API testing)

## Student Data Fields

- Name
- Roll Number
- Course
- Year

## Project Structure

```
student-record-system/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── add-student.html
│   └── students.html
│
└── README.md
```

## How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Open `add-student.html` or `students.html` in your browser

Or you can use Live Server extension in VS Code

## API Testing with Postman

You can test the APIs using Postman:

### Add Student (POST)
- URL: `http://localhost:5000/api/v1/students`
- Method: POST
- Body (JSON):
```json
{
  "name": "John Doe",
  "rollNumber": "2024001",
  "course": "B.Tech CSE",
  "year": "2nd Year"
}
```

### Get All Students (GET)
- URL: `http://localhost:5000/api/v1/students`
- Method: GET

### Update Student (PUT)
- URL: `http://localhost:5000/api/v1/students/{student_id}`
- Method: PUT
- Body (JSON):
```json
{
  "name": "John Updated",
  "rollNumber": "2024001",
  "course": "B.Tech CSE",
  "year": "3rd Year"
}
```

### Delete Student (DELETE)
- URL: `http://localhost:5000/api/v1/students/{student_id}`
- Method: DELETE

## Learning Outcomes

Through this project, I learned:
- How to create REST APIs using Express.js
- CRUD operations with MongoDB and Mongoose
- Connecting frontend with backend using Fetch API
- Handling HTTP methods (GET, POST, PUT, DELETE)
- Error handling in backend
- JSON data format
- Basic frontend development with HTML and Tailwind CSS

## Future Improvements

- Add search and filter functionality
- Add pagination for student list
- Add form validation
- Add student profile pictures
- Deploy on cloud platform

## Author

**Sharansh Jha**

B.Tech CSE Student

Learning backend development and REST APIs

## License

This is a student project created for learning purposes.
