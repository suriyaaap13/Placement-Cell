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
    result: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]
},{
    timestamps: true
});
const Company = mongoose.model("Company", companySchema);
module.exports = Company;