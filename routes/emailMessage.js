var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');


router.post('/send-mail', (req, res) => {
    console.log("Body", req.body)
  
    pool.query('SELECT emailaddress FROM student_registration', (error, results, fields) => {
  
      if (error) throw error;
  
      const emails = results.map(result => result.emailaddress);
      let subject = req.body.sub;
      let heading = req.body.head;
      let msg = req.body.message;
      sendMessageMail(emails, subject, heading, msg)
    });
    res.status(200).json({ status: true, message: 'Message Sent Successfuly!...', });
  });


  router.post("/verify-user",(req,res)=>{
    console.log("Verify user email",req.body)
    pool.query('update student_registration set isverification=? where emailaddress=? ', [req.body.verified, req.body.emailaddress], (err, results)=>{
      if(err)
      {
        console.log(err)
        res.status(200).json({status:false,message:'server Error'})
      }
      else
      {
        res.status(200).json({status:true,message:'Verify successfully!..'})
      }
    })
  })

  
  
  


module.exports = router