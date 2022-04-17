const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    dsa: {
        type: Number,
        required: true
    },
    wd: {
        type: Number,
        required: true
    },
    react: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});


const Student = mongoose.model("Student", studentSchema);
module.exports = Student;