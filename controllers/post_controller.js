module.exports.studentData = (req, res)=>{
    console.log(req.body);
    return res.render('add_student', {
        title: "Add Student Form"
    });
}