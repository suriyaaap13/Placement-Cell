const Student = require('../models/student');
const Company = require('../models/company');
const helper = require('./helper');


// save the student data
module.exports.createStudent = async (req, res)=>{
    try{
        await Student.create(req.body);
        return res.redirect('/');
    }catch(err){
        console.log("Error "+ err);
        return res.redirect('back');
    }   
}
// renders the company form
module.exports.companyForm = async (req, res)=>{
    // Taking the students who are not placed and sending it to the company form to render
    const jobless = await Student.find({status: "Not Placed"});
    
    return res.render('add_company', {
        title: "Add Company Form",
        jobless: jobless
    });
}
// save the company data
module.exports.createCompany = async (req, res)=>{
    await Company.create(req.body);
    const allotedStudents = await req.body.students;
    return res.redirect('/posts/company-list');
}
// Display interview list
module.exports.companyList = async (req, res)=>{
    const company = await Company.find({}).populate('students');
    res.render('interview_register',{
        title: "Interview Register",
        company: company,
        helper: helper
    });
}