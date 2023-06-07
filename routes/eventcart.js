var express =require("express")
var router = express.Router()
var upload = require("./multer")
var pool = require("./pool")

router.get("/get_event_details",(req,res)=>{
    pool.query("select * from eventcard",(error,result)=>{
        if(error)
        {
            console.log("Error Occurs",error)
            res.status(400).json({status:false,message:'Server Error'})
        }
        else
        {
            console.log("true",result)
            res.status(200).json({status:true,data:result,message:'Successfully fetch'})
        }
    })
})
router.get("/get_event_total",(req,res)=>{
    pool.query("SELECT COUNT(*) AS total_students FROM student_registration",(error,result)=>{
        if(error)
        {
            console.log("Error Occurs",error)
            res.status(400).json({status:false,message:'Server Error'})
        }
        else
        {
            console.log("true",result)
            res.status(200).json({status:true,data:result[0],message:'Successfully fetch'})
        }
    })
})

router.post("/post_event_details",upload.single('event_image'),(req,res)=>{
    console.log("body",req.body)
    console.log("",req.file.originalname)
    pool.query("insert into eventcard (event_name, event_description, event_date, event_time, event_location, event_price, event_image) values(?,?,?,?,?,?,?)",[req.body.eventname, req.body.eventdescription, req.body.eventdate, req.body.eventtime, req.body.eventlocation, req.body.eventamount, req.body.eventpic],(error,result)=>{
        if(error)
        {
            console.log("Error Occurs",error)
            res.status(400).json({status:false,message:'Server Error'})
        }
        else
        {
            console.log("true",result)
            res.status(200).json({status:true,message:'Successfully send'})
        }
    })
})



module.exports=router