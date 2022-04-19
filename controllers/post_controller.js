const Student = require('../models/student');
const Company = require('../models/company');
// render student form
module.exports.studentForm = (req, res)=>{
    return res.render('add_student', {
        title: "Add Student Form"
    });
}
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
    Company.create(req.body);
    const allotedStudents = await req.body.students;
    // let student = [];
    // allotedStudents.forEach(async (element)=>{
    //     const temp = await Student.findById(element);
    //     console.log(temp);
    //     student.push(temp)
    // });
    // console.log(student);
    return res.redirect('back');
}