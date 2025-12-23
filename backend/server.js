// Main server file
// Backend server created by Sharansh Jha
// REST API written for practice
// simple implementation for student project

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// creating express app
const app = express();

// middleware to parse JSON data
app.use(express.json());

// middleware to enable CORS for frontend
app.use(cors());

// importing student routes
const studentRoutes = require('./routes/studentRoutes');

// MongoDB connection
// connecting to MongoDB database
// using environment variable for deployment or local database for development
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/studentDB';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});

// using student routes with /api/v1 prefix
app.use('/api/v1', studentRoutes);

// basic route to check if server is running
app.get('/', (req, res) => {
    res.json({
        message: 'Student Record Management System API',
        author: 'Sharansh Jha',
        version: '1.0'
    });
});

// setting up port
// using environment variable for deployment or 3000 for local development
const PORT = process.env.PORT || 3000;

// starting server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Backend API created by Sharansh Jha`);
});
