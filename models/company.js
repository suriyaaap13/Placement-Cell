const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    doi: {
        type: Date,
        required: true
    },
    flag: {
        type: Boolean,
        default: false
    },
    result: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
        value: {
            type: Boolean,
            default: false
        }
    }]
},{
    timestamps: true
});
const Company = mongoose.model("Company", companySchema);
module.exports = Company;