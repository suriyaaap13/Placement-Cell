const Student = require('../models/student');
module.exports.studentData = (req, res)=>{
    return res.render('add_student', {
        title: "Add Student Form"
    });
}
module.exports.create = async (req, res)=>{
    try{
        await Student.create(req.body);
    }catch(err){
        console.log("Error "+ err);
    }
    return res.redirect('back');
}