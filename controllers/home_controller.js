const Student = require('../models/student');
const helper = require('./helper');
module.exports.home = async function(req, res){
    const student = await Student.find({});
    console.log(student);
    return res.render('home', {
        title: "Home",
        student: student,
        helper: helper
    });
}