// Student controller file
// REST API logic written by Sharansh Jha
// Learning backend development and CRUD operations

const Student = require('../models/Student');

// REST API to add new student
// POST /api/v1/students
exports.addStudent = async (req, res) => {
    try {
        // first we get student data from request body
        const { name, rollNumber, course, year } = req.body;

        // checking if all fields are provided
        if (!name || !rollNumber || !course || !year) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all fields'
            });
        }

        // then we save it in database
        const student = await Student.create({
            name,
            rollNumber,
            course,
            year
        });

        // sending success response
        res.status(201).json({
            success: true,
            message: 'Student added successfully',
            data: student
        });

    } catch (error) {
        // if roll number already exists
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Roll number already exists'
            });
        }

        // handling other errors
        res.status(500).json({
            success: false,
            message: 'Error adding student',
            error: error.message
        });
    }
};

// REST API to get all students
// GET /api/v1/students
exports.getAllStudents = async (req, res) => {
    try {
        // fetching all students from database
        const students = await Student.find();

        // sending response with student data
        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching students',
            error: error.message
        });
    }
};

// REST API to update student details
// PUT /api/v1/students/:id
exports.updateStudent = async (req, res) => {
    try {
        // getting student id from URL parameter
        const { id } = req.params;

        // getting updated data from request body
        const { name, rollNumber, course, year } = req.body;

        // finding student and updating
        const student = await Student.findByIdAndUpdate(
            id,
            { name, rollNumber, course, year },
            { new: true, runValidators: true }
        );

        // if student not found
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        // sending success response
        res.status(200).json({
            success: true,
            message: 'Student updated successfully',
            data: student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating student',
            error: error.message
        });
    }
};

// REST API to delete student
// DELETE /api/v1/students/:id
exports.deleteStudent = async (req, res) => {
    try {
        // getting student id from URL
        const { id } = req.params;

        // finding and deleting student
        const student = await Student.findByIdAndDelete(id);

        // if student not found
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        // sending success response
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting student',
            error: error.message
        });
    }
};
