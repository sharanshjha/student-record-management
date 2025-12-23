// Student model created by Sharansh Jha
// This is a simple mongoose schema for student records
// Learning MongoDB and Mongoose basics

const mongoose = require('mongoose');

// creating student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
}, {
    timestamps: true  // this will add createdAt and updatedAt fields automatically
});

// creating model from schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
