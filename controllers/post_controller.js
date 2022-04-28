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
    const company = await Company.find({})
    .populate({
        path: 'result',
        populate: {
            path: 'student',
            model: 'Student'
        }
    });
    return res.render('company_register', {
        title: "Add Company Form",
        jobless: jobless,
        company: company,
        helper: helper
    });
}
// save the company data
module.exports.createCompany = async (req, res)=>{
    const std = req.body.students;
    const resultBody = [];
    std.forEach((element)=>{
        let obj = {
            student: element,
            value: false
        }
        resultBody.push(obj);
    });
    console.log(resultBody);
    const hi = await Company.create({
        companyName: req.body.companyName,
        doi: req.body.doi,
        result: resultBody
    });
    console.log(hi);
    return res.redirect('/posts/company');
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
// Render the add result page
module.exports.addResult = async (req, res)=>{
    const company = await Company.findById(req.params.id)
    .populate({
        path: 'result',
        populate: {
            path: 'student',
            model: 'Student'
        }
    });
    return res.render('result', {
        title: "Add-Result",
        company: company,
        helper: helper
    });
}
// store result in database
module.exports.storeResult = async (req, res)=>{
    const selected = req.body.id;
    const student = await Student.findById(req.body.id);
    const company = await Company.findById(req.params.id);
    await company.result.forEach(async (element)=>{
        if(selected.includes(element.student.valueOf())){
            await Company.findByIdAndUpdate(req.params.id, {$pull: {result: {_id: element._id}}});
        }
    });
    if(Array.isArray(selected)){
        await selected.forEach((element)=>{
            const update = {
                student: element,
                value: true
            }
            company.result.push(update);
        });
       
    }else{
        const update = {
            student: selected,
            value: true
        }
        company.result.push(update);
    }
    company.flag = true;
    await company.save();
    return res.redirect('/posts/company');
}
// show result of the specific interview
module.exports.showResult = async (req, res)=>{
    const company = await Company.findById(req.params.id)
    .populate({
        path: "result",
        populate: {
            path: 'student',
            model: 'Student'
        }
    });
    res.render('view_result',{
        title: "View Result",
        company: company,
        helper: helper
    });
}