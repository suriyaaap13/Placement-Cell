const Student = require('../models/student');
const Company = require('../models/company');
const json2csv = require('json2csv').parse;

module.exports.table = async (req, res)=>{
    const company = await Company.find({})
    .populate({
        path: 'result',
        populate: {
            path: 'student',
            model: 'Student'
        }
    });
    const data = [];
    // Student Id , student Name, college Name, dsa, webd, react, status, company Name, doi, result 
    await company.forEach((element)=>{
        if(element.flag){
            element.result.forEach((e2)=>{
                const newData = {
                    "Student Id": e2.student.studentId,
                    "Student Name": e2.student.studentName,
                    "collegeName": e2.student.collegeName,
                    "DSA Score": e2.student.dsa,
                    "Web-Dev Score": e2.student.webd,
                    "React Score": e2.student.react,
                    "Status": e2.student.status,
                    "Company Name": element.companyName,
                    "Date of Interview": element.doi,
                    "Result": (e2.value==true) ? "Pass": "Fail",
                }
                data.push(newData);
            });
        }else{
            element.result.forEach((e2)=>{
                const newData = {
                    "Student Id": e2.student.studentId,
                    "Student Name": e2.student.studentName,
                    "College Name": e2.student.collegeName,
                    "DSA Score": e2.student.dsa,
                    "Web-Dev Score": e2.student.webd,
                    "React Score": e2.student.react,
                    "Status": e2.student.status,
                    "Company Name": element.companyName,
                    "Date of Interview": element.doi,
                    "Result": "On-Hold",
                }
                data.push(newData);
            });
        }
        
    });
    

    const csvString = await json2csv(data);
    await res.set('Content-Type', 'text/csv');
    res.status(200).send(csvString);
    // return res.redirect('back');
}