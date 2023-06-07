var mysql= require("mysql")
var pool=mysql.createPool(
    {
        host:'sql.freedb.tech',
        port:3306,
        user:'freedb_deepak',
        password:'3%#nB%p@AgZzQSp',
        database:'freedb_College_events',
        multipleStatements:true,
        connectionLimit:100
    })
    module.exports=pool