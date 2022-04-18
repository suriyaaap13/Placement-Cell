const Student = require('../models/student');
const helper = require('./helper');
module.exports.home = async function(req, res){
    const student = await Student.find({});
    return res.render('home', {
        title: "Home",
        student: student,
        helper: helper
    });
}
{/* <td><%= element.companyName %></td>
<td><%= helper.convert(element.doi) %></td>
<td><%= element.result %></td> */}