const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    dsa: {
        type: Number,
        required: true
    },
    webd: {
        type: Number,
        required: true
    },
    react: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
  

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;