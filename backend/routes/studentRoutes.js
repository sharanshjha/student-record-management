// Student routes file
// REST API routes created by Sharansh Jha
// Learning Express Router for backend APIs

const express = require('express');
const router = express.Router();

// importing controller functions
const {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

// REST API endpoints for student operations

// route to add new student
router.post('/students', addStudent);

// route to get all students
router.get('/students', getAllStudents);

// route to update student by id
router.put('/students/:id', updateStudent);

// route to delete student by id
router.delete('/students/:id', deleteStudent);

module.exports = router;
