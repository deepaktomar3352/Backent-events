var express = require('express');
var router = express.Router();
var upload = require('./pool');
var upload = require('./multer');
var pool = require('./pool');

// *********************************USED FOR SCHEDULE SUBMIT DATA****************************************


//  ###################USED FOR TECHNOPARV SCHEDULE SUBMIT DATA####################
router.post('/technoparv_schedule_submit', upload.single('logo'), function (req, res, next) {
    const table=req.body.table
   
    pool.query(`insert into  ${table}( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo,page,day)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [req.body.eventname, req.body.type, req.body.venue, req.body.date, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.submitedat, req.body.updatedat, req.body.submitedby, req.file.originalname,req.body.page,req.body.day], function (error, result) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: 'Submited Succesfully' })
      }
  
  
    })
  
  });
  
  // ##################################################################################################
  // ******************************************USED FOR UPDATE TECHNOPARV SCHEDULE********************************************
  router.post('/technoparv_schedule_update', function (req, res, next) {
    const table = req.body.table
    console.log("table",table)
  
    pool.query(`update ${table} set eventname=?, type=?, venue=?, date=?, starttime=?, endtime=?, fee=?, coordinators=?, updatedat=? where scheduleid=?`, [req.body.eventname, req.body.type, req.body.venue, req.body.dt, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.updatedat, req.body.scheduleid], function (error, result) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: 'Submited Succesfully' })
      }
  
  
    })
  
  });
  // ##################################################################################################################
  router.post('/technoparv_schedule_delete', function (req, res, next) {
    const table = req.body.table
    console.log(table)
  
    pool.query(`delete from ${table} where scheduleid=?`, [req.body.scheduleid], function (error, result) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, message: 'Submited Succesfully' })
      }
  
  
    })
  
  });
  
  
  
  
  
  //  ###################USED FOR VILAY SCHEDULE SUBMIT DATA###################################################################
  router.post('/vilayday01', upload.single('logo'), function (req, res, next) {
    pool.query("insert into vilayday01( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.eventname, req.body.type, req.body.venue, req.body.date, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.submitedat, req.body.updatedat, req.body.submitedby, req.file.originalname], function (error, result) {
  
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
  
  router.post('/vilayday02', upload.single('logo'), function (req, res, next) {
    pool.query("insert into vilayday02( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.eventname, req.body.type, req.body.venue, req.body.date, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.submitedat, req.body.updatedat, req.body.submitedby, req.file.originalname], function (error, result) {
  
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
  router.post('/vilayday03', upload.single('logo'), function (req, res, next) {
    pool.query("insert into vilayday03( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.eventname, req.body.type, req.body.venue, req.body.date, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.submitedat, req.body.updatedat, req.body.submitedby, req.file.originalname], function (error, result) {
  
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
  router.post('/vilayday04', upload.single('logo'), function (req, res, next) {
    pool.query("insert into vilayday04( eventname, type, venue, date, starttime, endtime, fee, coordinators, submitedat, updatedat, submitedby, logo)values(?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.eventname, req.body.type, req.body.venue, req.body.date, req.body.starttime, req.body.endtime, req.body.fee, req.body.coordinators, req.body.submitedat, req.body.updatedat, req.body.submitedby, req.file.originalname], function (error, result) {
  
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
  // #############################################################################################################
  
  // **********************************************************************************************************************
  
  
  
  
  // **************************USED FOR FETCH SCHEDULE DATA *******************************************************************
  
  // ######################################USED FOR TECHNOPARV SCHEDULE FETCH DATA############################################
  router.get('/technoparvday01fetch', function (req, res) {
    pool.query("select * from technoparvday01", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
       
        res.status(200).json({ status: true, data: result, message: 'Fetchtechnoparv day01 Succesfully' })
  
      }
    })
  });
  router.get('/technoparvday02fetch', function (req, res) {
    pool.query("select * from technoparvday02", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
       
        res.status(200).json({ status: true, data: result, message: 'Fetch technoparv day02 Succesfully' })
  
      }
    })
  });
  router.get('/technoparvday03fetch', function (req, res) {
    pool.query("select * from technoparvday03", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
       
        res.status(200).json({ status: true, data: result, message: 'Fetch technoparv day03 Succesfully' })
  
      }
    })
  });
  router.get('/technoparvday04fetch', function (req, res) {
    pool.query("select * from technoparvday04", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
     
        res.status(200).json({ status: true, data: result, message: 'Fetch  technoparv  day04 Succesfully' })
  
      }
    })
  });
  // ########################################################################################################################
  // ######################################USED FOR VILAY SCHEDULE FETCH DATA############################################
  router.get('/vilayday01fetch', function (req, res) {
    pool.query("select * from vilayday01", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result, message: 'Fetch vilay day01 Succesfully' })
  
      }
    })
  });
  router.get('/vilayday02fetch', function (req, res) {
    pool.query("select * from vilayday02", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result, message: 'Fetch vilay day02 Succesfully' })
  
      }
    })
  });
  router.get('/vilayday03fetch', function (req, res) {
    pool.query("select * from vilayday03", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result, message: 'Fetch vilay day03 Succesfully' })
  
      }
    })
  });
  router.get('/vilayday04fetch', function (req, res) {
    pool.query("select * from vilayday04", function (error, result,) {
  
      if (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error....' })
      }
      else {
        console.log(result)
        res.status(200).json({ status: true, data: result, message: 'Fetch vilay day 04 Succesfully' })
  
      }
    })
  });
  // ########################################################################################################################
  
  // ************************************************************************************************************************
  


module.exports = router;