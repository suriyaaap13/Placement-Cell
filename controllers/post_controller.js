module.exports.studentData = (req, res)=>{
    return res.render('add_student', {
        title: "Add Student Form"
    });
}
module.exports.create = (req, res)=>{
    console.log(req.body);
    console.log(req.body.doi);
    return;
}