var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');
/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index');
});

router.get("/sponsordata", function (req, res) {
  res.render('sponsor', { message: "" });
})

router.post('/sponsorsubmit', upload.single('logo'), function (req, res, next) {
  pool.query("insert into sponsor( firstname, lastname, emailaddress, mobilenumber, company, comment, companylogo, category, submitedat, updatedate, updatedby)values(?,?,?,?,?,?,?,?,?,?,?)", [req.body.fname, req.body.lname, req.body.emailaddress, req.body.mobilenumber, req.body.companyname, req.body.comment, req.file.originalname, req.body.category, req.body.submitedat, req.body.updatedat, req.body.submitedby], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, message: 'Submited Succesfully' })
    }


  });
});



router.get('/showsponsor', function (req, res) {
  pool.query("select * from sponsor", function (error, result,) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result, message: 'Fetch Sponsor Succesfully' })

    }
  })
});


router.get('/showsponsorimg', function (req, res) {
  pool.query("select * from sponsor", function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result, message: 'Fetch Sponsor Succesfully' })
    }

  })

});

router.post('/sponsorupdate', function (req, res) {
  pool.query("update sponsor set firstname=?,lastname=?,emailaddress=?,mobilenumber=?,company=?,comment=?,category=?,updatedate=?,updatedby=? where sponsorid=? ", [req.body.fname, req.body.lname, req.body.emailaddress, req.body.mobilenumber, req.body.companyname, req.body.comment, req.body.category, req.body.updatedat, req.body.submitedby, req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " updated succesfully" })
    }
  })
});


router.post('/sponsorimgupdate', upload.single('logo'), function (req, res) {

  pool.query("update sponsor set companylogo=? where sponsorid=?", [req.file.originalname, req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
  })
});

router.post('/delete_sponsor_detail', (req, res) => {

  pool.query("delete from sponsor  where sponsorid=?", [req.body.sponsorid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " Deleted  succesfully" })
    }

  })


});
// ***********************************************USE FOR TITLES UPDATE***************************************

router.post('/update_vilay_title', function (req, res) {

  // console.log("body",req.body)
  pool.query('update  vilaytitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
 });



router.post('/update_technoparv_title', function (req, res) {
 
  // console.log("body",req.body)
  pool.query('update  technoparvtitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
    

});


router.post('/updated_home_title', function (req, res) {
  
  // console.log("body",req.body)
  pool.query('update  hometitle set titlename=?, titledate=?, updatedby=?, updatedat=? where titleid=?',[ req.body.title ,req.body.dt,req.body.updatedby,req.body.updatedat,req.body.titleid],function (error, result) {
    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, message: " updated succesfully" })
    }
      });
    

});


// ******************************************************************************************************************


// ********************************************USED FOR FETCH TITLES**************************************************
router.get('/fetchtitle', function (req, res) {
  pool.query("SELECT * FROM hometitle ORDER BY titleid DESC LIMIT 1", function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: 'Server error....' })
    }

    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " succesfully" })
    }
  })
});
// *************************************************************************************************************

module.exports = router;
