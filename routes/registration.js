const { json } = require('express');
var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool')
const sendMail = require("./sendMail")
const sendMessageMail = require("./sendMessageMail")
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

router.get('/reg', (req, res) => {
    res.render('studentregister')
});

router.post('/getOTP',(req,res)=>{

    const otp = Math.floor(100000 + Math.random() * 900000);
    res.status(200).json({ status: true, otp: otp,email:req.body.emailaddress, message: 'OTP send Successfully' })
    console.log("OTP", otp)
    let mailSubject = 'Mail Verification';
    let content = `<p>Hi <b> ${req.body.studentname}</b>, \
    Please  Verify Your Mail.Your OTP for one time password is <h3> ${otp} </h3>`;
    sendMail(req.body.emailaddress, mailSubject, content, otp);

})

router.post('/registration', (req, res) => {
   
    console.log("body", req.body)
    pool.query('insert into student_registration (student_college,student_course, student_sem, student_name, student_father, student_gender, student_enrollment, student_mobile, student_email, student_password ,submitedat,updatedat,submitedby,isverification) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.college, req.body.course, req.body.semester, req.body.studentname, req.body.fathername, req.body.gender, req.body.enrollment, req.body.mobilenumber, req.body.emailaddress, req.body.password, req.body.submitedat, req.body.updatedat, req.body.submitedby,req.body.isVerified], (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).json({ status: false, message: "Server Error" })
        }
        else {
            console.log(result)
            res.status(200).json({ status: true,email:req.body.emailaddress,data:result, message: 'Registered Successfully' })
            console.log("OTP", otp)
            let mailSubject = 'Mail Verification';
            // const randomToken = randomstring.generate();
            let content = `<p>Hi <b> ${req.body.studentName}</b>, \
            Please  Verify Your Mail.Your OTP for one time password is <h3> ${otp} </h3>`;
            // sendMail(req.body.emailaddress, mailSubject, content, otp);

        }
    })
})




module.exports = router