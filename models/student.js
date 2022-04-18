const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    gender: {
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
    companyName: {
        type: String,
        required: true
    },
    doi: {
        type: Date,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
},{
    timestamps: true
});


  

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;